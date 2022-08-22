import { createContext, useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import { useContext } from "react";
import { ToastContext } from "./toastAlerts";
import { TechsContext } from "./userTechs";

export const TechEditContext = createContext([]);

export const TechEditProvider = ({ children }) => {
  const { getUserData } = useContext(TechsContext);

  const [openEdit, setOpenEdit] = useState(false);
  const [techId, setTechId] = useState("");

  const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

  const { notifySuccess } = useContext(ToastContext);

  const schema = yup.object().shape({
    title: yup.string().required("Digite uma tecnologia"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  function handleEdit(data) {
    console.log(data);
    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${techId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifySuccess("Tech editada com sucesso!");
        handleCloseEdit();
        getUserData();
      })
      .catch((err) => console.log(err));
  }

  function handleDelete() {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifySuccess("Tech removida com sucesso!");
        handleCloseEdit();
        getUserData();
      })
      .catch((err) => console.log(err));
  }

  return (
    <TechEditContext.Provider
      value={{
        openEdit,
        setOpenEdit,
        techId,
        setTechId,
        register,
        handleSubmit,
        errors,
        handleClickOpenEdit,
        handleCloseEdit,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </TechEditContext.Provider>
  );
};

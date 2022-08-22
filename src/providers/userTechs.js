import { createContext, useContext, useState } from "react";

import axios from "axios";
import { ToastContext } from "./toastAlerts";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const TechsContext = createContext([]);

export const TechsProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  const { notifySuccess, notifyError } = useContext(ToastContext);

  const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

  const schema = yup.object().shape({
    title: yup.string().required("Digite uma tecnologia"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function getUserData() {
    const userInfo = JSON.parse(localStorage.getItem("@kenziehub:userId"));
    axios
      .get(`https://kenziehub.herokuapp.com/users/${userInfo}`)
      .then((response) => {
        setTech(response.data.techs);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }

  function handleAddTech(data) {
    const errorMsg =
      "User Already have this technology created you can only update it";

    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifySuccess("Tech adicionada com sucesso!");
        setStatus("");
        reset({ title: "", status: "" });
        getUserData();
      })
      .catch((err) => {
        if (err.response.data.message === errorMsg) {
          notifyError("Tech já está na lista");
        } else {
          notifyError("Insira todos os dados");
        }
      });
  }

  return (
    <TechsContext.Provider
      value={{
        tech,
        setTech,
        user,
        setUser,
        status,
        setStatus,
        register,
        handleSubmit,
        reset,
        errors,
        getUserData,
        handleAddTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

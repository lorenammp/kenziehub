import { createContext, useContext } from "react";

import axios from "axios";
import { ToastContext } from "./toastAlerts";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext([]);

export const RegisterProvider = ({ children }) => {
  const { notifySuccess, notifyError } = useContext(ToastContext);

  const navigate = useNavigate();

  const handleRegister = (data) => {
    const getUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    axios
      .post("https://kenziehub.herokuapp.com/users", getUser)
      .then((response) => {
        notifySuccess("Registro efetuado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data.message === "Email already exists") {
          notifyError("E-mail já cadastrado");
        } else {
          notifyError("Verifique os dados inseridos");
        }
      });
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

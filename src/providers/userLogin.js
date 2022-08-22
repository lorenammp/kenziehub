import { createContext, useContext, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ToastContext } from "./toastAlerts";

export const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const { notifySuccess, notifyError } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleLogin = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response.data.user);
        notifySuccess("Login efetuado com sucesso");
        const token = response.data.token;
        const userId = response.data.user.id;

        localStorage.setItem("@kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@kenziehub:userId", JSON.stringify(userId));

        setAuthenticated(true);
        navigate("/dashboard");
      })
      .catch((err) => notifyError("Verifique os dados inseridos"));
  };

  return (
    <LoginContext.Provider
      value={{ authenticated, setAuthenticated, handleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};

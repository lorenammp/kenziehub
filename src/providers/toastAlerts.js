import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useState } from "react";

export const ToastContext = createContext([]);

export const ToastProvider = ({ children }) => {
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  return (
    <ToastContext.Provider value={{ notifySuccess, notifyError }}>
      {children}
    </ToastContext.Provider>
  );
};

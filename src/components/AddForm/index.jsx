import { ButtonMain } from "./styles";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import axios from "axios";

import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddForm(props) {
  const [status, setStatus] = useState("");
  const textInput = React.useRef(null);

  const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

  const schema = yup.object().shape({
    title: yup.string().required("Digite uma tecnologia"),
  });

  const errorMsg =
    "User Already have this technology created you can only update it";

  const notifySuccess = () => toast.success("Tech adicionada com sucesso!");
  const notifyError1 = () => toast.error("Tech já está na lista");
  const notifyError2 = () => toast.error("Insira todos os dados");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleAddTech(data) {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifySuccess();
        setStatus("");
        textInput.current.value = "";
        props.handleClose();
        reset({ title: "", status: "" });
      })
      .catch((err) => {
        if (err.response.data.message === errorMsg) {
          notifyError1();
        } else {
          notifyError2();
        }
      });
  }

  return (
    <form onSubmit={handleSubmit(handleAddTech)}>
      <TextField
        error={Boolean(errors.title)}
        id="title"
        label="Tecnologia"
        variant="outlined"
        helperText={errors.title ? errors.title?.message : " "}
        fullWidth
        inputRef={textInput}
        sx={{ mt: 5, mb: 2 }}
        InputProps={{ style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
        {...register("title")}
      />

      <FormControl fullWidth>
        <InputLabel id="select-status">Modulo</InputLabel>
        <Select
          labelId="select-status"
          id="status"
          value={status}
          label="Modulo"
          {...register("status")}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
          <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
          <MenuItem value={"Avançado"}>Avançado</MenuItem>
        </Select>
      </FormControl>

      <ButtonMain type="submit">Cadastrar Tecnologia</ButtonMain>
    </form>
  );
}

export default AddForm;

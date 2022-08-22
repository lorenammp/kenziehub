import { ButtonContainer, ButtonMain, ButtonSecondary } from "./styles";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";

import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { TechEditContext } from "../../providers/techEdit";

function EditForm(props) {
  // const {
  //   register,
  //   handleSubmit,
  //   errors,
  //   setTechId,
  //   handleEdit,
  //   handleDelete,
  // } = useContext(TechEditContext);

  const [status, setStatus] = useState(props.status);
  const [name, setName] = useState(props.name);

  const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

  const schema = yup.object().shape({
    title: yup.string().required("Digite uma tecnologia"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const notifySuccessEdit = () => toast.success("Tech editada com sucesso!");
  const notifySuccessDelete = () => toast.success("Tech removida com sucesso!");

  function handleEdit(data) {
    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${props.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifySuccessEdit();
        props.handleCloseEdit();
        props.getUserData();
      })
      .catch((err) => console.log(err));
  }

  function handleDelete() {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${props.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifySuccessDelete();
        props.handleCloseEdit();
        props.getUserData();
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(handleEdit)}>
      <TextField
        error={Boolean(errors.title)}
        id="title"
        label="Tecnologia"
        value={name}
        variant="outlined"
        helperText={errors.title ? errors.title?.message : " "}
        fullWidth
        sx={{ mt: 5, mb: 2 }}
        InputProps={{ style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
        onChange={(e) => setName(e.target.value)}
        {...register("title")}
      />

      <FormControl fullWidth>
        <InputLabel id="select-status">Status</InputLabel>
        <Select
          labelId="select-status"
          id="status"
          value={status}
          label="Status"
          fullWidth
          {...register("status")}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value={"Iniciante"} selected>
            Iniciante
          </MenuItem>
          <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
          <MenuItem value={"Avançado"}>Avançado</MenuItem>
        </Select>
      </FormControl>
      <ButtonContainer>
        <ButtonMain type="submit">Salvar</ButtonMain>

        <ButtonSecondary onClick={handleDelete}>Excluir</ButtonSecondary>
      </ButtonContainer>
    </form>
  );
}

export default EditForm;

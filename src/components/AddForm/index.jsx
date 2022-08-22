import { ButtonMain } from "./styles";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useContext } from "react";

import { TechsContext } from "../../providers/userTechs";

function AddForm() {
  const { status, setStatus, handleAddTech, register, handleSubmit, errors } =
    useContext(TechsContext);

  const textInput = React.useRef(null);

  return (
    <form onSubmit={handleSubmit(handleAddTech)}>
      <TextField
        error={Boolean(errors.title)}
        id="title"
        label="Tecnologia"
        variant="outlined"
        helperText={errors.title ? errors.title?.message : " "}
        fullWidth
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

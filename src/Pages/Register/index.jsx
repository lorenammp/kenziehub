import {
  HeaderAlign,
  FormData,
  RegisterForm,
  SmallText,
  TitleH1,
  TitleH2,
  TitleH4,
  ButtonMain,
  ButtonSmall,
} from "./styles";

import axios from "axios";

import { useHistory } from "react-router-dom";

import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [module, setModule] = useState("");

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Digite um nome de usuário")
      .min(3, "Mínimo de 3 caracteres!")
      .max(18, "Máximo de 18 caracteres!"),
    email: yup.string().required("Digite um e-mail válido!"),
    password: yup
      .string()
      .required("Digite uma senha!")
      .matches(
        /((?=.*\d).{8,64})/,
        "Senha deve ter, no mínimo, 8 digítos e pelo menos 1 número."
      )
      .matches(/(?=.*[a-z])/, "Digite pelo menos uma letra minúscula")
      .matches(/(?=.*[A-Z])/, "Digite pelo menus uma letra maiúscula")
      .matches(/(?=.*[\W])/, "Digite pelo menos um caracter especial"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A senha não está igual a digitada"),
    bio: yup.string().required("Insira sua bio!"),
    contact: yup.string().required("Insira sua bio!"),
    course_module: yup.string().required("Selecione o módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const notifySuccess = () => toast.success("Registro efetuado com sucesso!");
  const notifyError1 = () => toast.error("E-mail já cadastrado");
  const notifyError2 = () => toast.error("Verifique os dados inseridos");

  function handleRegister(data) {
    const getUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    console.log(getUser);
    axios
      .post("https://kenziehub.herokuapp.com/users", getUser)
      .then((response) => {
        notifySuccess();
        return history.push("/");
      })
      .catch((err) => {
        if (err.response.data.message === "Email already exists") {
          notifyError1();
        } else {
          notifyError2();
        }
      });
  }

  const history = useHistory();
  function handleChangePage() {
    return history.push("/");
  }

  return (
    <FormData>
      <HeaderAlign>
        <TitleH1>KenzieHub</TitleH1>

        <ButtonSmall onClick={handleChangePage}>Login</ButtonSmall>
      </HeaderAlign>

      <RegisterForm
        className="register-form"
        onSubmit={handleSubmit(handleRegister)}
      >
        <TitleH2>Crie sua conta</TitleH2>
        <SmallText>
          <TitleH4>Rápido e grátis, vamos nessa!</TitleH4>
        </SmallText>

        <TextField
          error={Boolean(errors.name)}
          id="name"
          label="Nome de usuário"
          variant="outlined"
          helperText={errors.name ? errors.name?.message : " "}
          size="small"
          fullWidth
          InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          {...register("name")}
        />

        <TextField
          error={Boolean(errors.email)}
          id="email"
          label="E-mail"
          variant="outlined"
          helperText={errors.email ? errors.email?.message : " "}
          size="small"
          fullWidth
          InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          {...register("email")}
        />

        <TextField
          error={Boolean(errors.password)}
          id="password"
          label="Senha"
          variant="outlined"
          type="password"
          helperText={errors.password ? errors.password?.message : " "}
          size="small"
          fullWidth
          InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          {...register("password")}
        />

        <TextField
          error={Boolean(errors.confirmPassword)}
          id="confirmPassword"
          label="Confirme a senha"
          variant="outlined"
          type="password"
          helperText={
            errors.confirmPassword ? errors.confirmPassword?.message : " "
          }
          size="small"
          fullWidth
          InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          {...register("confirmPassword")}
        />

        <TextField
          error={Boolean(errors.bio)}
          id="bio"
          label="Bio"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
          InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          helperText={errors.bio ? errors.bio?.message : " "}
          {...register("bio")}
        />

        <TextField
          error={Boolean(errors.contact)}
          id="contact"
          label="contact"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
          InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          helperText={errors.contact ? errors.contact?.message : " "}
          {...register("contact")}
        />

        <FormControl fullWidth>
          <InputLabel id="select-module">Modulo</InputLabel>
          <Select
            error={Boolean(errors.course_module)}
            labelId="select-module"
            id="course_module"
            value={module}
            label="Modulo"
            fullWidth
            {...register("course_module")}
            onChange={(e) => setModule(e.target.value)}
          >
            <MenuItem
              value={"Primeiro módulo (Introdução ao Frontend)"}
              selected
            >
              Primeiro módulo (Introdução ao Frontend)
            </MenuItem>
            <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
              Segundo módulo (Frontend Avançado)
            </MenuItem>
            <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
              Terceiro módulo (Introdução ao Backend)
            </MenuItem>
            <MenuItem value={"Quarto módulo (Backend Avançado)"}>
              Quarto módulo (Backend Avançado)
            </MenuItem>
          </Select>
        </FormControl>

        <ButtonMain>Cadastrar</ButtonMain>
      </RegisterForm>
    </FormData>
  );
}

export default Register;

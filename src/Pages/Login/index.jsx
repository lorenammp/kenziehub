import {
  MainContent,
  FormData,
  TitleH1,
  TitleH2,
  RegisterForm,
  ButtonMain,
  SmallText,
  ButtonSecondary,
} from "./styles";

import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import Header from "../../components/Header";

import { useContext } from "react";
import { LoginContext } from "../../providers/userLogin";

function Login(props) {
  const { handleLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Digite um e-mail válido!"),
    password: yup.string().required("Digite uma senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleChangePage() {
    navigate("/register");
  }

  if (props.authenticated) {
    navigate("/dashboard");
  }

  return (
    <MainContent>
      <FormData>
        <Header>
          <TitleH1>Kenzie Hub</TitleH1>
        </Header>
        <RegisterForm
          className="login-form"
          onSubmit={handleSubmit(handleLogin)}
        >
          <TitleH2 variant="h5" sx={{ mb: 4 }} gutterBottom component="div">
            Login
          </TitleH2>

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

          <ButtonMain>Entrar</ButtonMain>

          <SmallText>Ainda não possui uma conta?</SmallText>
          <ButtonSecondary onClick={handleChangePage}>
            Cadastre-se
          </ButtonSecondary>
        </RegisterForm>
      </FormData>
    </MainContent>
  );
}

export default Login;

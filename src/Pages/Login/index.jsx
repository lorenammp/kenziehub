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

import axios from "axios";

import { Redirect, useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import Header from "../../components/Header";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const schema = yup.object().shape({
    email: yup.string().required("Digite um e-mail válido!"),
    password: yup.string().required("Digite uma senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const notifySuccess = () => toast.success("Login efetuado com sucesso!");
  const notifyError = () => toast.error("Verifique os dados inseridos");

  function handleLogin(data) {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        notifySuccess();
        const token = response.data.token;
        const user = response.data;

        localStorage.setItem("@kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@kenziehub:user", JSON.stringify(user));
        props.setAuthenticated(true);
        props.setUser(user);

        return history.push("/dashboard");
      })
      .catch((err) => notifyError());
  }

  function handleChangePage() {
    return history.push("/register");
  }

  if (props.authenticated) {
    return <Redirect to="/dashboard" />;
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

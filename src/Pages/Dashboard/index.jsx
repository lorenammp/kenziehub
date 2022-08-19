import {
  HeaderDashboard,
  ButtonSmall,
  GreetingText,
  AddMore,
  AddBtn,
  CardList,
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
} from "./styles";

import axios from "axios";

import { Redirect, useHistory } from "react-router-dom";

import { useState, useEffect } from "react";

import Divider from "@mui/material/Divider";

import Header from "../../components/Header";
import SingleCard from "../../components/SingleCard";
import AddTech from "../../components/AddTech";
import EmptyList from "../../components/EmptyList";

function Dashboard(props) {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [tech, setTech] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("@kenziehub:user"));
  useEffect(() => {
    if (userInfo) {
      return props.setUser(userInfo);
    }
  }, []);

  function getUserData() {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${userInfo.user.id}`)
      .then((response) => {
        setTech(response.data.techs);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleChangePage() {
    localStorage.clear();
    props.setAuthenticated(false);
    return history.push("/");
  }

  if (!props.authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header>
        <HeaderDashboard>
          <TitleH1>KenzieHub</TitleH1>

          <ButtonSmall onClick={handleChangePage}>Sair</ButtonSmall>
        </HeaderDashboard>
      </Header>

      <Divider />
      <GreetingText>
        <TitleH2>Olá, {props.user.user?.name}</TitleH2>

        <TitleH4>{props.user.user?.course_module}</TitleH4>
      </GreetingText>

      <Divider />

      <AddMore>
        <TitleH3>Tecnologias</TitleH3>

        <AddBtn onClick={handleClickOpen}>+</AddBtn>

        <AddTech
          userData={props.user.user?.data}
          setOpen={setOpen}
          open={open}
          getUserData={getUserData}
        ></AddTech>
      </AddMore>

      {tech.length === 0 ? (
        <EmptyList />
      ) : (
        <CardList>
          {tech.map((tech) => (
            <SingleCard
              key={tech.id}
              id={tech.id}
              name={tech.title}
              status={tech.status}
              getUserData={getUserData}
            ></SingleCard>
          ))}
        </CardList>
      )}
    </>
  );
}

export default Dashboard;

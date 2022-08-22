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

import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";

import Divider from "@mui/material/Divider";

import Header from "../../components/Header";
import SingleCard from "../../components/SingleCard";
import AddTech from "../../components/AddTech";
import EmptyList from "../../components/EmptyList";
import { TechsContext } from "../../providers/userTechs";

function Dashboard(props) {
  const { tech, user, getUserData } = useContext(TechsContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));
    if (!token) {
      navigate("/");
    }
    getUserData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleChangePage() {
    localStorage.clear();
    navigate("/");
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
        <TitleH2>Olá, {user?.name}</TitleH2>

        <TitleH4>{user?.course_module}</TitleH4>
      </GreetingText>

      <Divider />

      <AddMore>
        <TitleH3>Tecnologias</TitleH3>

        <AddBtn onClick={handleClickOpen}>+</AddBtn>

        <AddTech setOpen={setOpen} open={open}></AddTech>
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

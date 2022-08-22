import { Card, CardTitle, CardStatus, EditBtn } from "./styles";

import { FaEdit } from "react-icons/fa";

import EditTech from "../EditTech";
import { useContext } from "react";
import { TechEditContext } from "../../providers/techEdit";

function SingleCard(props) {
  const { handleClickOpenEdit } = useContext(TechEditContext);
  return (
    <Card>
      <CardTitle>{props.name}</CardTitle>

      <CardStatus>{props.status}</CardStatus>
      <EditBtn onClick={handleClickOpenEdit}>
        <FaEdit />
      </EditBtn>
      <EditTech
        name={props.name}
        id={props.id}
        status={props.status}
        getUserData={props.getUserData}
      ></EditTech>
    </Card>
  );
}

export default SingleCard;

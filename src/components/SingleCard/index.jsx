import { Card, CardTitle, CardStatus, EditBtn } from "./styles";

import { FaEdit } from "react-icons/fa";

import { useState } from "react";

import EditTech from "../EditTech";

function SingleCard(props) {
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
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
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
      ></EditTech>
    </Card>
  );
}

export default SingleCard;

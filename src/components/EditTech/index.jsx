import ModalTitle from "../ModalTitle";

import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import EditForm from "../EditForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditTech(props) {
  const handleCloseEdit = () => {
    props.setOpenEdit(false);
  };

  return (
    <Dialog
      open={props.openEdit}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseEdit}
      aria-describedby="alert-dialog-slide-description"
    >
      <ModalTitle handleClose={handleCloseEdit}>Editar Tecnologia</ModalTitle>
      <DialogContent sx={{ bgcolor: "#212529" }}>
        <EditForm
          handleCloseEdit={handleCloseEdit}
          name={props.name}
          status={props.status}
          id={props.id}
          getUserData={props.getUserData}
        ></EditForm>
      </DialogContent>
    </Dialog>
  );
}

export default EditTech;

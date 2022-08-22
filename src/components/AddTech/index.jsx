import ModalTitle from "../ModalTitle";

import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import AddForm from "../AddForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddTech(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <ModalTitle handleClose={handleClose}>Cadastrar Tecnologia</ModalTitle>
      <DialogContent sx={{ bgcolor: "#212529" }}>
        <AddForm></AddForm>
      </DialogContent>
    </Dialog>
  );
}

export default AddTech;

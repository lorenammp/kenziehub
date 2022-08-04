import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function ModalTitle(props) {
  const { children, handleClose } = props;

  return (
    <DialogTitle sx={{ bgcolor: "#343B41", fontSize: "12px", fontWeight: 600 }}>
      {children}
      {handleClose ? (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,

            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default ModalTitle;

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  width: "40%",
  color: "black",
  fontWeight: "900",
  fontSize: "30px",
  border: "1px solid black",
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const activities = props.activities;
  //   const activityList =
  //     activities &&
  //     activities.map(text => (
  //       <Typography id="modal-activity-text" variant="h6" component="h1">
  //         {text}
  //       </Typography>
  //     ));

  return (
    <div>
      <Button style={buttonStyle} onClick={handleOpen}>
        {props.modalTitle}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-text" variant="h6" component="h1">
            {props.modalText}
          </Typography>
          <Typography id="modal-modal-text" variant="h6" component="h1">
            {activities}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

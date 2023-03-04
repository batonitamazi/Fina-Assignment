import React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ConfirmationDialog({ open, handleSubmit, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>წაშლა</DialogTitle>
        <DialogContent>
          <DialogContentText>ნამდვილად გსურთ წაშლა?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>გაუქმება</Button>
          <Button onClick={handleSubmit}>წაშლა</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmationDialog;

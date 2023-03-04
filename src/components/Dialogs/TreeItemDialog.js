import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";

function TreeItemDialog({ open, handleClose, handleSubmit }) {
  const [value, setValue] = useState("");
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          კატეგორია
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
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="კატეგორიის სახელი"
            onChange={(event) => setValue(event.target.value)}
            type="text"
            value={value}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmit(value)}
            variant="contained"
            color="success"
          >
            save
          </Button>
          <Button onClick={handleClose} variant="contained" color="error">
            delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TreeItemDialog;

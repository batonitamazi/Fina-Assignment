import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";
function TreeItemAddDialog({open, handleClose, handleSubmit, node}) {
  const [name, setName] = useState("")
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
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmit(name)}
            variant="contained"
            color="success"
            disabled={!name}
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

export default TreeItemAddDialog;

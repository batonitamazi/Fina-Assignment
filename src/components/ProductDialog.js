import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";

function ProductDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>
          პროდუქტი
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
            id="code"
            label="კოდი"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="დასახელება"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="price"
            label="ფასი"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            margin="normal"
            id="country"
            label="ქვეყანა"
            type="text"
            fullWidth
            variant="outlined"
          />
          <div className="date-pickers--container">
            <TextField
              id="date"
              label="თარიღიდან"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: "45%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="თარიღამდე"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: "45%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="success">
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

export default ProductDialog;

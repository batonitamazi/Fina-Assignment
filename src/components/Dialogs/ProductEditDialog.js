import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";

function ProductEditDialog({
  open,
  handleClose,
  handleSubmit,
  selectedNodeId,
  selectedProduct,
}) {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
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
            value={code}
            onChange={({ target }) => setCode(target.value)}
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
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
            value={price}
            onChange={({ target }) => setPrice(target.value)}
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            margin="normal"
            id="country"
            value={country}
            onChange={({ target }) => setCountry(target.value)}
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
              value={startDate}
              onChange={({ target }) => setStartDate(target.value)}
              sx={{ width: "45%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="თარიღამდე"
              type="date"
              value={endDate}
              onChange={({ target }) => setEndDate(target.value)}
              sx={{ width: "45%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            value="Submit"
            type="Submit"
            variant="contained"
            color="success"
            onClick={() =>
              handleSubmit(
                selectedProduct,
                selectedNodeId,
                code,
                title,
                price,
                country,
                startDate,
                endDate
              )
            }
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

export default ProductEditDialog;

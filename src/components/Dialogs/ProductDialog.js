import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";
import CountrySelect from "../selects/CountrySelect";
import countryService from "../../services/countries";

function ProductDialog({ open, handleClose, handleSubmit, selectedNodeId }) {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [countries, setCountries] = useState();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [newCountryName, setNewCountryName] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    if (value === "<Add New>") {
      setAnchorEl(event.target);
    }
  };

  const handleNewCountryNameChange = (event) => {
    setNewCountryName(event.target.value);
  };

  const handleAddNewCountry = () => {
    countryService.create(newCountryName);
    if (newCountryName !== "") {
      setCountries([...countries, { name: newCountryName }]);
      setSelectedCountry(newCountryName);
      setNewCountryName("");
    }
    setAnchorEl(null);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    countryService.getAll().then((response) => setCountries(response));
  }, []);
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
          <CountrySelect
            countries={countries}
            selectedCountry={selectedCountry}
            newCountryName={newCountryName}
            anchorEl={anchorEl}
            handleCountryChange={handleCountryChange}
            handleNewCountryNameChange={handleNewCountryNameChange}
            handleAddNewCountry={handleAddNewCountry}
            handleClosePopover={handleClosePopover}
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
                selectedNodeId,
                code,
                title,
                price,
                selectedCountry,
                startDate,
                endDate
              )
            }
          >
            save
          </Button>
          <Button onClick={handleClose} variant="contained" color="error">
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductDialog;

import React, { useState } from "react";
import { Select, MenuItem, Popover, TextField, Button } from "@mui/material";

function CountrySelect({
  countries,
  selectedCountry,
  newCountryName,
  anchorEl,
  handleCountryChange,
  handleNewCountryNameChange,
  handleAddNewCountry,
  handleClosePopover,
}) {
  return (
    <>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        fullWidth
        variant="outlined"
      >
        {countries.map((country) => (
          <MenuItem key={country.name} value={country.name}>
            {country.name}
          </MenuItem>
        ))}
        <MenuItem value="<Add New>">&lt;დაამატე ახალი&gt;</MenuItem>
      </Select>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <TextField
          label="ახალი ქვეყანა"
          value={newCountryName}
          onChange={handleNewCountryNameChange}
        />
        <Button onClick={handleAddNewCountry}>Add</Button>
      </Popover>
    </>
  );
}

export default CountrySelect;

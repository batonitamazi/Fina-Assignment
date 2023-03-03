import React, { useState } from "react";
import ProductsTable from "./ProductsTable";
import { Grid, styled, Stack, Paper } from "@mui/material";
import ActionsContainer from "../ActionsContainer";
import ProductDialog from "../Dialogs/ProductDialog";

const DropDownItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "95%",
  border: "1px solid #212121",
}));
function ProductsContainer() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Grid item xs={8} style={{height: '100%'}}>
      <ProductDialog open={open} handleClose={handleClose}/>
      <Stack sx={{ height: "100%", paddingRight: "5px" }} spacing={1}>
        <ActionsContainer addOns={true} handleOpen={handleOpen}/>
        <DropDownItem elevation={0}>
          <ProductsTable />
        </DropDownItem>
      </Stack>
    </Grid>
  );
}

export default ProductsContainer;

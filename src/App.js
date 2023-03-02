import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ActionsContainer from "./components/ActionsContainer";
import ProductsTable from "./components/ProductsTable";


const DropDownItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "95%",
  border: '1px solid #212121'
}));

function App() {
  return (
    <Grid container spacing={1} sx={{ height: "100vh" }}>
      <Grid item xs={4}>
        <Stack sx={{ height: "100vh" , paddingLeft: '5px',}} spacing={1}>
          <ActionsContainer />
          <DropDownItem variant="outlined" elevation={0}>
          </DropDownItem>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Stack sx={{ height: "100vh", paddingRight: '5px', }} spacing={1}>
          <ActionsContainer addOns={true} />
          <DropDownItem elevation={0}>
            <ProductsTable />
          </DropDownItem>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;

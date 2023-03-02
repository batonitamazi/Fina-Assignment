import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ActionsItem = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "5%",
}))
const DropDownItem = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "95%",
}))

function App() {
  return (
      <Grid container spacing={1} sx={{height: '100vh'}}>
        <Grid item xs={4}>
            <Stack sx={{height: '100vh'}} spacing={1}>
              <ActionsItem elevation={0}>pirveli</ActionsItem>
              <DropDownItem variant="outlined" elevation={0}>meore</DropDownItem>
            </Stack>
        </Grid>
        <Grid item xs={8}>
            <Stack sx={{height: '100vh'}} spacing={1}>
              <ActionsItem>pirveli</ActionsItem>
              <DropDownItem>meore</DropDownItem>
            </Stack>
        </Grid>
      </Grid>
  );
}

export default App;

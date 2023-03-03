import "./App.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ProductsContainer from "./components/products/ProductsContainer";
import LeftContainer from "./components/groups/LeftContainer";

function App() {
  return (
    <Grid container spacing={1} sx={{ height: "100vh" }}>
      <LeftContainer />
      <ProductsContainer />
    </Grid>
  );
}

export default App;

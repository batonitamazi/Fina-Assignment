import "./App.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ProductsContainer from "./components/products/ProductsContainer";
import LeftContainer from "./components/groups/LeftContainer";

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState("");

  const handleSelect = (event, nodeId) => {
    setSelectedNodeId(nodeId);
  };
  return (
    <Grid container spacing={1} sx={{ height: "100vh" }}>
      <LeftContainer
        selectedNodeId={selectedNodeId}
        handleSelect={handleSelect}
      />
      <ProductsContainer selectedNodeId={selectedNodeId} />
    </Grid>
  );
}

export default App;

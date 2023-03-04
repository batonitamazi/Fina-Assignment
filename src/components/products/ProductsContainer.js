import React, { useState, useEffect } from "react";
import ProductsTable from "./ProductsTable";
import { Grid, styled, Stack, Paper } from "@mui/material";
import ActionsContainer from "../ActionsContainer";
import ProductDialog from "../Dialogs/ProductDialog";
import productService from "../../services/products";
import ProductEditDialog from ".././Dialogs/ProductEditDialog";

const DropDownItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "95%",
  border: "1px solid #212121",
}));
function ProductsContainer({ selectedNodeId }) {
  const [openProductAddDialog, setOpenProductAddDialog] = useState(false);
  const [openProductEditDialog, setOpenProductEditDialog] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOpenProductAddDialog = () => {
    setOpenProductAddDialog(true);
  };
  const handleOpenProductEditDialog = () => {
    setOpenProductEditDialog(true);
  };

  const handleCloseProductAddDialog = () => {
    setOpenProductAddDialog(false);
  };
  const handleCloseProductEditDialog = () => {
    setOpenProductEditDialog(false);
  };

  const handleAddProduct = (
    selectedNodeId,
    code,
    title,
    price,
    country,
    startDate,
    endDate
  ) => {
    const newProduct = {
      code: code,
      category: selectedNodeId,
      title: title,
      price: price,
      country: country,
      startDate: startDate,
      endDate: endDate,
    };
    productService.createProducts(newProduct);
    const newProducts = [...products];
    newProducts.push(newProduct);
    setProducts(newProducts);
    setOpenProductAddDialog(false);
  };

  const handleEditProduct = (
    selectedProduct,
    selectedNodeId,
    code,
    title,
    price,
    country,
    startDate,
    endDate
  ) => {
    //Selected Node Index
    const selectedNodeIndex = products.findIndex(
      ({ id }) => id === selectedProduct
    );

    const newProduct = {
      id: selectedProduct,
      code: code,
      category: selectedNodeId,
      title: title,
      price: price,
      country: country,
      startDate: startDate,
      endDate: endDate,
    };
    productService.update(newProduct);
    const newProducts = [...products];
    newProducts[selectedNodeIndex] = newProduct;
    setProducts(newProducts);
    setOpenProductEditDialog(false);
  };

  const handleDelete = () => {
    productService.deleteNode(selectedProduct);
    const newProducts = products.filter(
      (product) => product.id !== selectedProduct
    );
    setProducts(newProducts);
  };
  useEffect(() => {
    if (selectedNodeId !== "") {
      productService
        .getProducts(selectedNodeId)
        .then((data) => setProducts(data));
    }
  }, [selectedNodeId]);

  return (
    <Grid item xs={8} style={{ height: "100%" }}>
      <ProductDialog
        open={openProductAddDialog}
        handleClose={handleCloseProductAddDialog}
        handleSubmit={handleAddProduct}
        selectedNodeId={selectedNodeId}
      />
      <ProductEditDialog
        open={openProductEditDialog}
        handleClose={handleCloseProductEditDialog}
        handleSubmit={handleEditProduct}
        selectedNodeId={selectedNodeId}
        selectedProduct={selectedProduct}
      />
      <Stack sx={{ height: "100%", paddingRight: "5px" }} spacing={1}>
        <ActionsContainer
          addOns={true}
          handleAddOpen={handleOpenProductAddDialog}
          handleUpdateOpen={handleOpenProductEditDialog}
          handleDelete={handleDelete}
        />
        <DropDownItem elevation={0}>
          <ProductsTable
            products={products}
            selected={selectedProduct}
            setSelected={setSelectedProduct}
          />
        </DropDownItem>
      </Stack>
    </Grid>
  );
}

export default ProductsContainer;

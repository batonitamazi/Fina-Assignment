import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import ReplyIcon from "@mui/icons-material/Reply";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import DiagramDialog from "./diagram/DiagramDialog";

const ActionsItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "5%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between;",
  alignItems: "flex-end",
  marginTop: "10px",
}));

function ActionsContainer({
  addOns,
  handleAddOpen,
  handleUpdateOpen,
  handleDelete,
  data,
}) {
  const [open, setOpen] = useState(false);
  const handleDiagramOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ActionsItem elevation={0}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <AddIcon
          aria-label="add"
          onClick={handleAddOpen}
          sx={{
            padding: "5px",
            backgroundColor: "#212121",
            cursor: "pointer",
            color: (theme) => theme.palette.grey[300],
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        />
        <EditIcon
          aria-label="edit"
          sx={{
            padding: "5px",
            backgroundColor: "#212121",
            cursor: "pointer",
            color: (theme) => theme.palette.grey[300],
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
          onClick={handleUpdateOpen}
        />
        <ClearIcon
          aria-label="delete"
          sx={{
            padding: "5px",
            backgroundColor: "#212121",
            cursor: "pointer",
            color: (theme) => theme.palette.grey[300],
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
          onClick={handleDelete}
        />
      </Stack>
      {addOns ? (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <DiagramDialog open={open} handleClose={handleClose} data={data} />
          <Button variant="outlined" onClick={handleDiagramOpen}>
            დიაგრამა
          </Button>
          <ReplyIcon
            aria-label="delete"
            sx={{
              padding: "5px",
              backgroundColor: "#212121",
              cursor: "pointer",
              color: (theme) => theme.palette.grey[300],
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#757575",
              },
            }}
          />
        </Stack>
      ) : null}
    </ActionsItem>
  );
}

export default ActionsContainer;

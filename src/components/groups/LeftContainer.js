import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ActionsContainer from "../ActionsContainer";
import GroupsContainer from "./GroupsContainer";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TreeItemAddDialog from "../Dialogs/TreeItemAddDialog";

/**
 *   id     |  name  |  children       |  parent  |
 * products    ....   agrictulure,food     null
 * ...
 */

const initialData = [
  {
    id: "products",
    name: "პროდუქტები",
    children: ["agricalture", "food"],
    parent: null,
  },
  {
    id: "fruit",
    name: "ხილი",
    children: [],
    parent: "agricalture",
  },
  {
    id: "vegetable",
    name: "ბოსტნეული",
    children: [],
    parent: "agricalture",
  },
  {
    id: "agricalture",
    name: "აგრარული",
    children: ["fruit", "vegetable"],
    parent: "products",
  },
  {
    id: "food",
    name: "კვება",
    children: ["drinks", "kerdzs"],
    parent: "products",
  },
  {
    id: "drinks",
    name: "სასმელები",
    children: [],
    parent: "food",
  },
  {
    id: "kerdzs",
    name: "კერძები",
    children: [],
    parent: "food",
  },
];

const DropDownItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "95%",
  border: "1px solid #212121",
}));

function LeftContainer() {
  const [selectedNodeId, setSelectedNodeId] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initialData);

  const handleClose = () => {
    setOpen(false);
    setSelectedNodeId("");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelect = (event, nodeId) => {
    setSelectedNodeId(nodeId);
  };

  const deleteNode = () => {
    setData((prevData) => prevData.filter(({ id }) => id !== selectedNodeId));
    // ... find children and delete them
  };

  const handleAddNode = (newNodeName) => {
    setData((prevData) => {
      const selectedNodeIndex = prevData.findIndex(
        ({ id }) => id === selectedNodeId
      );

      // Selected node
      const { id, name, children, parent } = prevData[selectedNodeIndex];

      const newNodeId = uuidv4().toString();

      // Newly created node
      const newNode = {
        id: newNodeId,
        name: newNodeName,
        children: [],
        parent: selectedNodeId,
      };

      const newSelectedNode = {
        id,
        name,
        children: [...children, newNodeId],
        parent,
      };

      const newData = [...prevData];

      newData[selectedNodeIndex] = newSelectedNode;
      newData.push(newNode);

      return newData;
    });
  };

  return (
    <Grid item xs={4} sx={{ height: "100vh" }}>
      <TreeItemAddDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleAddNode}
        node={selectedNodeId}
      />
      <Stack sx={{ height: "100%", paddingLeft: "5px" }} spacing={1}>
        <ActionsContainer handleAddOpen={handleOpen} />
        <DropDownItem variant="outlined" elevation={0}>
          <GroupsContainer handleSelect={handleSelect} data={data} />
        </DropDownItem>
      </Stack>
    </Grid>
  );
}

export default LeftContainer;

// const handleUpdate = () => {
//     const findWithRecursion = (data) => {
//       data?.children?.map((item) =>
//         item.id === selectedNodeId ? setItem(item) : findWithRecursion(item)
//       );
//     };
//     findWithRecursion(data);
//     setOpen(true);
//   };
//   const handlePropertyUpdate = (value) => {
//     console.log(value);
//     const findWithRecursion = (data) => {
//       data?.children?.map((item) =>
//         item.id === selectedNodeId ? (item.value = value) : findWithRecursion(item)
//       );
//       return data;
//     };
//     console.log(findWithRecursion(data));
//     // setData(newItems)
//     setOpen(false);
//   };

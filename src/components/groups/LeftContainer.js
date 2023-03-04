import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ActionsContainer from "../ActionsContainer";
import GroupsContainer from "./GroupsContainer";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TreeItemAddDialog from "../Dialogs/TreeItemAddDialog";
import TreeItemDialog from "../Dialogs/TreeItemDialog";
import categoriesService from "../../services/categories";

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
  const [data, setData] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelect = (event, nodeId) => {
    setSelectedNodeId(nodeId);
  };

  const deleteNode = () => {
    setData((prevData) => prevData.filter(({ id }) => id !== selectedNodeId));
    ///// ... find children and delete them///////
  };

  const handleAddNode = (newNodeName) => {
    setData((prevData) => {
      const selectedNodeIndex = prevData.findIndex(
        ({ code }) => code === selectedNodeId
      );

      // Selected node
      const { code, name, children, parent } = prevData[selectedNodeIndex];
      console.log(selectedNodeId);

      //New Node code
      const newNodeCode = uuidv4().toString();

      // Newly created node
      const newNode = {
        code: newNodeCode,
        name: newNodeName,
        children: [],
        parent: selectedNodeId,
      };

      //new Parent Node copy node
      const newSelectedNode = {
        code,
        name,
        children: [...children, newNodeCode],
        parent,
      };

      //new Data which is the same as previous state data
      const newData = [...prevData];

      categoriesService.create(newNode);
      categoriesService.update(newSelectedNode);
      //push new item inside node list
      newData[selectedNodeIndex] = newSelectedNode;
      newData.push(newNode);
      setOpen(false);
      return newData;
    });
  };

  const handleUpdateNode = (newNodeNameForUpdate) => {
    setData((prevData) => {
      //Selected Node Index
      const selectedNodeIndex = prevData.findIndex(
        ({ id }) => id === selectedNodeId
      );

      // Selected node
      const SelectedNode = prevData[selectedNodeIndex];
      //Update Selected node name
      SelectedNode["name"] = newNodeNameForUpdate;

      //new Data which is the same as previous state data
      const newData = [...prevData];

      //modify selectedNodeIndex item inside newData Array
      newData[selectedNodeIndex] = SelectedNode;
      setOpen(false);
      return newData;
    });
  };

  useEffect(() => {
    categoriesService.getAll().then((categories) => setData(categories));
  }, []);

  return (
    <Grid item xs={4} sx={{ height: "100vh" }}>
      <TreeItemAddDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleAddNode}
        node={selectedNodeId}
      />

      <Stack sx={{ height: "100%", paddingLeft: "5px" }} spacing={1}>
        <ActionsContainer
          handleAddOpen={handleOpen}
          handleUpdateOpen={handleOpen}
          deleteNode={deleteNode}
        />
        <DropDownItem variant="outlined" elevation={0}>
          <GroupsContainer handleSelect={handleSelect} data={data} />
        </DropDownItem>
      </Stack>
    </Grid>
  );
}

export default LeftContainer;

/**
 *   id     |  name  |  children       |  parent  |
 * products    ....   agrictulure,food     null
 * ...
 */

// const initialData = [
//   {
//     id: "products",
//     name: "პროდუქტები",
//     children: ["agricalture", "food"],
//     parent: null,
//   },
//   {
//     id: "fruit",
//     name: "ხილი",
//     children: [],
//     parent: "agricalture",
//   },
//   {
//     id: "vegetable",
//     name: "ბოსტნეული",
//     children: [],
//     parent: "agricalture",
//   },
//   {
//     id: "agricalture",
//     name: "აგრარული",
//     children: ["fruit", "vegetable"],
//     parent: "products",
//   },
//   {
//     id: "food",
//     name: "კვება",
//     children: ["drinks", "kerdzs"],
//     parent: "products",
//   },
//   {
//     id: "drinks",
//     name: "სასმელები",
//     children: [],
//     parent: "food",
//   },
//   {
//     id: "kerdzs",
//     name: "კერძები",
//     children: [],
//     parent: "food",
//   },
// ];

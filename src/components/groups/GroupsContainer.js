import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const data = {
  id: "root",
  name: "პროდუქტები",
  children: [
    {
      id: "1",
      name: "აგრარული",
      children: [
        {
          id: "4",
          name: "ხილი",
          children: [
          ],
        },
        {
          id: "5",
          name: "ბოსტნეული",
          children: [
          ],
        }
      ],
    },
    {
      id: "2",
      name: "კვება",
      children: [
        {
          id: "4",
          name: "სასმელები",
        },
        {
          id: "5",
          name: "კერძები",
        },
      ],
    },
  ],
};

function GroupsContainer() {
  console.log(data)
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400 }}
    >
      {renderTree(data)}
    </TreeView>
  );
}

export default GroupsContainer;

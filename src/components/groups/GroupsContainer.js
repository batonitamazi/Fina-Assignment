import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

function GroupsContainer({ handleSelect, data }) {
  const renderTree = (currentNodeId) => {
    const currentNode = data.find(({ code }) => code === currentNodeId);
    const { children, name: currentNodeName } = currentNode;
    if (children.length > 0) {
      return (
        <TreeItem
          key={currentNodeId}
          nodeId={currentNodeId}
          label={currentNodeName}
        >
          {children.map((childNodeId) => renderTree(childNodeId))}
        </TreeItem>
      );
    }

    return (
      <TreeItem
        key={currentNodeId}
        nodeId={currentNodeId}
        label={currentNodeName}
      />
    );
  };
  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSelect}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400 }}
    >
      {data && renderTree(data[0].code)}
    </TreeView>
  );
}

export default GroupsContainer;

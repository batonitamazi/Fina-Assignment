import React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";

import DiagramTable from "../tables/DiagramTable";

function DiagramDialog({ open, handleClose, data }) {
  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <DialogTitle>
          დიაგრამა
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DiagramTable data={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DiagramDialog;

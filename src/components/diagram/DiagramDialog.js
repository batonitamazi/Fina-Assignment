import React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  table: {
    border: "1px solid #ccc",
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px",
  },
  apple: {
    background: "#FFC107",
  },
  orange: {
    background: "#FF5722",
  },
  banana: {
    background: "#8BC34A",
  },
});

function DiagramDialog({ open, handleClose, data }) {
  const classes = useStyles();
  const today = new Date();
  const columnHeaders = [];
  for (let i = 0; i <= 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    columnHeaders.push(`${formattedDate}`);
  }
  console.log(data);
  // Helper function to determine the CSS class for a given cell based on the product and date
  const getCellClass = (product, date) => {
    if (isDateInRange(date, product.startDate, product.endDate)) {
      switch (product.title) {
        case "კარტოფილი":
          return classes.apple;
        case "ბადრიჯანი":
          return classes.orange;
        case "Banana":
          return classes.banana;
        default:
          return "";
      }
    }
    return "";
  };
  // Helper function to check if a given date falls between two other dates
  const isDateInRange = (date, startDate, endDate) => {
    return date >= startDate && date <= endDate;
  };

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
          <Box>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>დასახელება</TableCell>
                    {columnHeaders.map((header) => (
                      <TableCell key={header} className={classes.th}>
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((product) => (
                    <TableRow key={product.code}>
                      <TableCell className={classes.td}>
                        {product.title}
                      </TableCell>
                      {columnHeaders.map((date) => (
                        <TableCell
                          key={date}
                          className={`${classes.td} ${getCellClass(
                            product,
                            date
                          )}`}
                        ></TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DiagramDialog;

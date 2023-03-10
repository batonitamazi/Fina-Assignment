import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

function createData(code, name, price, country, startDate, endDate) {
  return {
    code,
    name,
    price,
    country,
    startDate,
    endDate,
  };
}

const rows = [
  createData("0001", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0002", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0003", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0004", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0005", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0006", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0007", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0008", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0009", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0010", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0011", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0012", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0013", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
  createData("0014", "ვაშლი", 4.0, "საქართველო", "3/2/2023", "3/2/2023"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "code",
    numeric: false,
    disablePadding: true,
    label: "კოდი",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "დასახელება",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "ფასი",
  },
  {
    id: "country",
    disablePadding: false,
    label: "ქვეყანა",
  },
  {
    id: "startDate",
    numeric: true,
    disablePadding: false,
    label: "დაწყების თარიღი",
  },
  {
    id: "endDate",
    numeric: true,
    disablePadding: false,
    label: "დამთავრების თარიღი",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function ProductsTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("code");
  const [selected, setSelected] = React.useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, code) => {
    if (code === selected) {
      setSelected("");
    } else if (code !== selected) {
      setSelected(code);
    }
  };
  const isSelected = (name) => selected === name;
  return (
    <Box>
      <Paper>
        <TableContainer sx={{ maxHeight: '91vh'}}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  const isItemSelected = isSelected(row.code);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      style={{ overflow: "scroll" }}
                      hover
                      onClick={(event) => handleClick(event, row.code)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.code}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.code}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">{row.country}</TableCell>
                      <TableCell align="left">{row.startDate}</TableCell>
                      <TableCell align="left">{row.endDate}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function tokenInfoTable(address, name, symbol, totalSupply, decimals, owner) {
    return <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Item</b></TableCell>
            <TableCell align="right"><b>Value</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  
          <TableRow>
            <TableCell align="left">{'Token Address'}</TableCell>
            <TableCell align="right">{address}</TableCell>
          </TableRow>
  
          <TableRow>
            <TableCell align="left">{'Name'}</TableCell>
            <TableCell align="right">{name}</TableCell>
          </TableRow>
  
          <TableRow>
            <TableCell align="left">{'Symbol'}</TableCell>
            <TableCell align="right">{symbol}</TableCell>
          </TableRow>
  
          <TableRow>
            <TableCell align="left">{'Total Supply'}</TableCell>
            <TableCell align="right">{totalSupply}</TableCell>
          </TableRow>
  
          <TableRow>
            <TableCell align="left">{'Decimals'}</TableCell>
            <TableCell align="right">{decimals}</TableCell>
          </TableRow>
  
          <TableRow>
            <TableCell align="left">{'Owner'}</TableCell>
            <TableCell align="right">{owner}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>;
  }
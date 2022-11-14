import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ItemListTable.scss'
import noImage from "../../assets/img/Items/no-photo.jpg";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";

function createData(tablePhoto, tableKey1, tableKey2, tableKey3, tableKey4, tableLink) {
  return {tablePhoto, tableKey1, tableKey2, tableKey3, tableKey4, tableLink};
}

const ItemListTable = ({items, itemsName}) => {
  const rows = []
  {
    items?.map(item =>
      rows.push(createData(
        <Avatar className='table__photo'
                src={`https://starwars-visualguide.com/assets/img/${itemsName}/${item.url.replace(/[^0-9]/g, '')}.jpg`}
                alt={`${item.name}`}
                onError={event => {
                  event.target.src = noImage
                }}
        />,
        Object.values(item)[0],
        Object.values(item)[1],
        Object.values(item)[2],
        Object.values(item)[3],
        <Link className='tableLink' to={`/${itemsName}/${item.url.replace(/[^0-9]/g, '')}`}>
        </Link>,
      )))
  }

  return (
    <TableContainer className='TableContainer container' component={Paper}>
      <Table className='Table' sx={{minWidth: 650}} size="small">
        <TableHead>
          {items && <TableRow>
            <TableCell>AVATAR</TableCell>
            <TableCell align="left">{Object.keys(items[0])[0].toUpperCase().replaceAll('_', ' ')}</TableCell>
            <TableCell align="left">{Object.keys(items[0])[1].toUpperCase().replaceAll('_', ' ')}</TableCell>
            <TableCell align="left">{Object.keys(items[0])[2].toUpperCase().replaceAll('_', ' ')}</TableCell>
            <TableCell align="left">{Object.keys(items[0])[3].toUpperCase().replaceAll('_', ' ')}</TableCell>
            <TableCell align="left">
            </TableCell>
          </TableRow>}
        </TableHead>
        <TableBody>
          {rows.map((row, j) => (
            <TableRow
              key={j}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {row.tablePhoto}
              </TableCell>
              <TableCell align="left">{row.tableKey1}</TableCell>
              <TableCell align="left">{row.tableKey2}</TableCell>
              <TableCell align="left">{row.tableKey3}</TableCell>
              <TableCell align="left">{row.tableKey4}</TableCell>
              <TableCell align="left">{row.tableLink}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemListTable;
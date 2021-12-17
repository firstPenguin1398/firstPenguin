import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Member(props) {
  return (
    <TableRow>
      <TableCell style={{textAlign: "center"}}>{props.name}</TableCell>
      <TableCell style={{textAlign: "center"}}>{props.team}</TableCell>
      <TableCell style={{textAlign: "center"}}>{props.content}</TableCell>
    </TableRow>
  )
}

export default Member

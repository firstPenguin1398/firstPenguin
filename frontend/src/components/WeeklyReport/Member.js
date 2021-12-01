import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class Member extends Component {
    render() {
      return(
          <TableRow>
              <TableCell>{this.props.name}</TableCell>
              <TableCell>{this.props.class}</TableCell>
              <TableCell>{this.props.team}</TableCell>
              <TableCell>{this.props.report}</TableCell>
          </TableRow>
      );
    }
  }
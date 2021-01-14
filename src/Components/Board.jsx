import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useQuery } from '@apollo/client';
import { GET_TICKETS } from '../graphql/queries/getTickets';
import { organisationId } from '../organisation'
import NewTicket from './NewTicket';
import Ticket from './Ticket'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }

});

function TicketLoader({ board }) {

  const { loading, error, data } = useQuery(GET_TICKETS, {
    variables: { organisationId, boardId: board.id },
  })

  if (loading) return "loading";
  if (error) return `Error! ${error}`;

  return (
    <ul>
      {data.board.tickets.map((ticket) => <Ticket board={board} ticket={ticket} key={ticket.id} />)}
    </ul>
  )
}

function Board({ board }) {
  const classes = useStyles();
  return (
    <div className="board" key={board.id}>
      <h2>{board.name}</h2>
      <TicketLoader board={board} />
      <NewTicket board={board} />
    </div >
  );
}

export default Board;
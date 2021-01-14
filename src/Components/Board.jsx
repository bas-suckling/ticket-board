import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TICKETS } from '../graphql/queries/getTickets';
import { organisationId } from '../organisation'
import NewTicket from './NewTicket';
import Ticket from './Ticket'

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
  return (
    <div className="board" key={board.id}>
      <h2>{board.name}</h2>
      <TicketLoader board={board} />
      <NewTicket board={board} />
    </div >
  );
}

export default Board;
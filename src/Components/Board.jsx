import React from "react";
import NewTicket from "./NewTicket";
import Ticket from "./Ticket";

function Board({ board }) {
  return (
    <div className="board" key={board.id}>
      <h2>{board.name}</h2>
      <ul>
        {board.tickets.map((ticket) => (
          <Ticket board={board} ticket={ticket} key={ticket.id} />
        ))}
      </ul>
      <NewTicket board={board} />
    </div>
  );
}

export default Board;

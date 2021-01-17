import DeleteTicketButton from "./DeleteTicketButton";
import UpdateTicketButton from "./UpdateTicketButton";
import "./Ticket.css";

function Ticket({ board, ticket }) {
  const { name, description, status } = ticket;

  return (
    <li>
      <span className="ticket-info">
        Ticket Name: {name}, Description: {description}, Status: {status}
      </span>
      <span className="ticket-delete">
        <DeleteTicketButton ticket={ticket} board={board} />
      </span>
      <span className="ticket-update">
        <UpdateTicketButton board={board} ticket={ticket} />
      </span>
    </li>
  );
}

export default Ticket;

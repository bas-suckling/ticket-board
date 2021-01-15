import DeleteTicketButton from './DeleteTicketButton'
import UpdateTicketButton from './UpdateTicketButton';

function Ticket({ board, ticket }) {
    const { id, name, description, status } = ticket;

    // add ticket should add the result to the tickets field, instead of removing the exisitng one, will sit one level higher on the board

    return (
            <li> Ticket Name: {name}, Description:  {description}, Status: {status}  <DeleteTicketButton id={id} board={board} /> <UpdateTicketButton board={board} ticket={ticket}/> </li>
    );
}

export default Ticket;
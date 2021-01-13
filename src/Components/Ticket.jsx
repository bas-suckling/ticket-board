import DeleteTicketButton from './DeleteTicketButton'
import UpdateTicketButton from './UpdateButton';

function Ticket({ board, ticket }) {
    const { id, name, description, status } = ticket;

    // add ticket should add the result to the tickets field, instead of removing the exisitng one, will sit one level higher on the board
    // edit ticket does not need an update method as apollo knows based on the ID

    return (
        <div className="ticket" id={id}>
            {name}, {description}, {status} <UpdateTicketButton/> <DeleteTicketButton id={id} board={board} /> 
        </div>
    );
}

export default Ticket;
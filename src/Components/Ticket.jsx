import DeleteTicketButton from './DeleteTicketButton'
import UpdateTicketButton from './UpdateTicketButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Ticket({ board, ticket }) {
    const { id, name, description, status } = ticket;

    // add ticket should add the result to the tickets field, instead of removing the exisitng one, will sit one level higher on the board
    // edit ticket does not need an update method as apollo knows based on the ID

    return (
            <li> Ticket Name: {name}, Description:  {description}, Status: {status} <UpdateTicketButton board={board} ticket={ticket}/> <DeleteTicketButton id={id} board={board} /> </li>
        
    );
}

export default Ticket;
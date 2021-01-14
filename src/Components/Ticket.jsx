import DeleteTicketButton from './DeleteTicketButton'
import UpdateTicketButton from './UpdateTicketButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Ticket({ board, ticket }) {
    const { id, name, description, status } = ticket;

    // add ticket should add the result to the tickets field, instead of removing the exisitng one, will sit one level higher on the board
    // edit ticket does not need an update method as apollo knows based on the ID

    return (
        // <div className="ticket" id={id}>
        //     {name}, {description}, {status} <UpdateTicketButton/> <DeleteTicketButton id={id} board={board} /> 
        // </div>

        <TableRow key={id}>
              <TableCell component="th" scope="row">{name}</TableCell>
              <TableCell align="left">{description}</TableCell>
              <TableCell align="center">{status}</TableCell>
              <TableCell align="right"><UpdateTicketButton/> <DeleteTicketButton id={id} board={board} /></TableCell>
        </TableRow>
    );
}

export default Ticket;
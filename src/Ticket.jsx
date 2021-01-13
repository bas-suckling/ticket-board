import { useMutation } from "@apollo/client";
import { DELETE_TICKET } from "./graphql/mutations/deleteTicket";
import { organisationId } from './organisation'


function Ticket({ board, ticket }) {
    const { id, name, description, status } = ticket;


    // add ticket should add the result to the tickets field, instead of removing the exisitng one, will sit one level higher on the board
    // edit ticket does not need an update method as apollo knows based on the ID


    const [deleteTicket, state] = useMutation(DELETE_TICKET, {
        variables: { organisationId, ticketId: id },
        update: (cache) => {
            cache.modify({
                id: cache.identify(board),
                fields: {
                    tickets(existingTickets, {readField}) {
                        return existingTickets.filter((ticketRef) => readField("id", ticketRef) !== id)
                    }
                }
            })
        }
    });

    console.log(state);

    return (
        <div className="ticket">
            {name}, {description}, {status} <button onClick={() => deleteTicket()}>Delete</button>
        </div>
    );
}

export default Ticket;
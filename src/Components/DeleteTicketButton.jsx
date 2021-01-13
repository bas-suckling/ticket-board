import { useMutation } from "@apollo/client";
import { DELETE_TICKET } from "../graphql/mutations/deleteTicket";
import { organisationId } from '../organisation'

function DeleteTicketButton({id, board}) {

    const [deleteTicket, state] = useMutation(DELETE_TICKET, {
        variables: { organisationId, ticketId: id },
        update: (cache) => {
            cache.modify({
                id: cache.identify(board),
                fields: {
                    tickets(existingTickets, {readField}) {
                        console.log(state)
                        return existingTickets.filter((ticketRef) => readField("id", ticketRef) !== id)
                    }
                }
            })
        }
    });

    return(
        <>
            <button onClick={() => deleteTicket()}>Delete</button>
        </>
    )
}

export default DeleteTicketButton
import { organisationId } from '../organisation'
import { useMutation } from "@apollo/client";
import DELETE_TICKET from '../graphql/mutations/deleteTicket'


function DeleteTicketButton({id, board}) {

        const [deleteTicket] = useMutation(DELETE_TICKET, {
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
      }
    )
    
    return(
        <>
            <button onClick={() => deleteTicket({id, board})}>Delete Ticket</button>
        </>
    )
}

export default DeleteTicketButton
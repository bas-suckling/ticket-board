import { organisationId } from "../organisation";
import { useMutation } from "@apollo/client";
import DELETE_TICKET from "../graphql/mutations/deleteTicket";

function DeleteTicketButton({ ticket, board }) {
  const [deleteTicket] = useMutation(DELETE_TICKET, {
    variables: { organisationId, ticketId: ticket.id },
    update: (cache) => {
      cache.modify({
        id: cache.identify(board),
        fields: {
          tickets(existingTickets, { readField }) {
            return existingTickets.filter(
              (ticketRef) => readField("id", ticketRef) !== ticket.id
            );
          },
        },
      });
      cache.evict({ id: cache.identify(ticket) });
      cache.gc();
    },
  });

  return (
    <>
      <button onClick={() => deleteTicket({ id: ticket.id, board })}>
        Delete Ticket
      </button>
    </>
  );
}

export default DeleteTicketButton;

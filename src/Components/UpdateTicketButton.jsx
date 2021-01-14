import { useMutation } from "@apollo/client";
import { PUT_TICKET } from "../graphql/mutations/putTicket";
import { organisationId } from '../organisation'


function UpdateTicketButton ({id}){

    const [updateTicket] = useMutation(PUT_TICKET, {
        variables: { organisationId, ticketId: id },
    });

    return <button onClick={() => updateTicket(id)}>Update</button>
}

export default UpdateTicketButton
import { useMutation } from "@apollo/client";
import { PUT_TICKET } from "../graphql/mutations/putTicket";
import { organisationId } from '../organisation'
import { useInput } from './hooks/useInput'


function UpdateTicketForm({ board, ticket }) {
    const { value: name, bind: bindName, reset: resetName } = useInput(`${ticket.name}`);
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput(`${ticket.description}`);
    const { value: status, bind: bindStatus, reset: resetStatus } = useInput(`${ticket.status}`);
    let visible = true
    console.log(status)

    const [updateTicket] = useMutation(PUT_TICKET, {
    })

    return (
        <form onSubmit={e => {
            e.preventDefault()
            updateTicket({ variables: { organisationId, boardId: board.id, ticketId: ticket.id, input: { name, description, status, visible } } })
            resetName()
            resetDescription()
            resetStatus()
        }}>
            <label>Name</label>
            <input name="name" required {...bindName} />
            <label>Description</label>
            <input name="description" required {...bindDescription} />
            <label>Status</label>
            <select name="status" required {...bindStatus}>
                <option value="TODO">TODO</option>
                <option value="INPROGRESS">INPROGRESS</option>
                <option value="DONE">DONE</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    )

}

export default UpdateTicketForm
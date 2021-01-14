import { useMutation } from "@apollo/client";
import { PUT_TICKET } from "../graphql/mutations/putTicket";
import { organisationId } from '../organisation'
import { useInput } from './hooks/useInput'
// import gql from '@apollo/client'

function NewTicketForm({ board }) {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');
    const { value: status, bind: bindStatus, reset: resetStatus } = useInput('TODO');
    const visible = true

    const [newTicket] = useMutation(PUT_TICKET, {
        update: (cache, { data: { addTicket } }) => {
            cache.modify({
                id: cache.identify(board),
                fields: {
                    // tickets(existingTickets = []) {
                    //     console.log("respsone from backend",)
                    //     console.log(existingTickets)
                    //     const newTicketRef = cache.writeFragment({
                    //         data: addTicket,
                    //         fragment: gql`
                    //       fragment Ticket on Board {
                    //         id
                    //         name
                    //         description
                    //         status
                    //         visible
                    //       }
                    //     `
                    //     })
                    //     return [...existingTickets, newTicketRef]
                    // }

                    tickets(existingTickets, { readField }) {
                        return existingTickets.add(() => readField("id") === addTicket.id)
                    }


                }
            })
        }


    })


    return (
        <form onSubmit={e => {
            e.preventDefault()
            newTicket({ variables: { organisationId, boardId: board.id, input: { name, description, status, visible } } })
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





export default NewTicketForm
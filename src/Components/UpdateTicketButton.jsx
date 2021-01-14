import { useMutation } from "@apollo/client";
import { PUT_TICKET } from "../graphql/mutations/putTicket";
import { organisationId } from '../organisation'
import {useState} from 'react'
import NewTicketForm from './NewTicketForm'



function UpdateTicketButton ({board}){

    const [isVisible, setIsVisible] = useState(false)

    const onClick = () => setIsVisible(!isVisible)

    // const [updateTicket] = useMutation(PUT_TICKET, {
    //     variables: { organisationId, ticketId: id },
    // });

    // return <button onClick={() => updateTicket(id)}>Update</button>
    
    return (
    <>
    <button onClick={onClick}>Update</button>
                {isVisible ? <NewTicketForm board={board}/> : <br/>}
            </>
    )
}

export default UpdateTicketButton
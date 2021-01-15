import {useState} from 'react'
import UpdateTicketForm from './UpdateTicketForm'

function UpdateTicketButton ({board, ticket}){

    const [isVisible, setIsVisible] = useState(false)

    const onClick = () => setIsVisible(!isVisible)
    
    return (
    <>
    <button onClick={onClick}>Update Ticket</button>
                {isVisible ? <UpdateTicketForm board={board} ticket={ticket}/> : <br/>}
            </>
    )
}

export default UpdateTicketButton
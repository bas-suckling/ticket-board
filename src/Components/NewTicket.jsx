import NewTicketForm from "./NewTicketForm";
import {useState} from 'react'

function NewTicket ({board}){

    const [isVisible, setIsVisible] = useState(false)

    const onClick = () => setIsVisible(!isVisible)

    return (
            <>
                <button onClick={onClick}>Create New Ticket</button>
                {isVisible ? <NewTicketForm board={board}/> : <br/>}
            </>
    )
}

export default NewTicket
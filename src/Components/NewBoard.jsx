import NewBoardForm from "./NewBoardForm";
import {useState} from 'react'

function NewBoard (){

    const [isVisible, setIsVisible] = useState(false)

    const onClick = () => setIsVisible(!isVisible)

    return (
            <>
                <button onClick={onClick}>Create New Board</button>
                {isVisible ? <NewBoardForm/> : <br/>}
            </>
    )
}

export default NewBoard
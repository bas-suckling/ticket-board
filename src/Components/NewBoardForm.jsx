import { useMutation } from '@apollo/client';
import React from 'react'
import { PUT_BOARD } from "../graphql/mutations/putBoard";
import { organisationId } from '../organisation'
import { useInput } from './hooks/useInput'


function NewBoardForm(){
    const { value: name, bind: bindName, reset: resetName } = useInput('');

    const [newBoard] = useMutation(PUT_BOARD, {
        
    })

    return(
        <form onSubmit={e => {
            e.preventDefault()
            newBoard({ variables: { organisationId , input:{name}}})
            resetName()
        }}>
            <label>Board Name</label>
            <input name="name" required {...bindName} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NewBoardForm


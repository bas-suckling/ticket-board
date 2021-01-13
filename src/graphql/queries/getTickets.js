import { gql } from '@apollo/client';

//queries backend using organisationID and board ID and returns array of ticket for that board info
export const GET_TICKETS = gql`
    query board($organisationId: ID!, $boardId: ID!) {
        board(organisationId: $organisationId, boardId: $boardId) {
            id
            name
            
            createdAt
            updatedAt
            tickets {
                id
                name
                description
                status
            }  
        }
    }`;

import { gql } from '@apollo/client';

//To create a board don't pass an id
export const PUT_BOARD = gql`
    mutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {
        putBoard(organisationId: $organisationId, boardId: $boardId, input: $input) {
            id
            name
            
            createdAt
            updatedAt
            tickets {
            name
            description
            status
            }  
        }
    }
`;


import { gql, useQuery } from '@apollo/client';

//queries backend using organisationID and board ID and returns array of ticket for that board info
export const GET_TICKETS = gql`
    query board($organisationId: ID!, $boardId: ID!) {
        board(organisationId: $organisationId, boardId: $boardId) {
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

// This will be used elsewhere
function Boards({organisaionID, boardID}) {
    const { loading, error, data } = useQuery(GET_TICKETS, {
        variables: {organisaionID, boardID},
    })

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return data
}
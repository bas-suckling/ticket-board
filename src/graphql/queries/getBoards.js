import { gql, useQuery } from '@apollo/client';

// queries using organisationID and returns org info and array of boards
const GET_BOARDS = gql`
    query organisation($organisationId: ID!) {
        organisation(organisationId: $organisationId) {
            id
            name
            timezone
            createdAt
            updatedAt
            
            boards {
                id
                name
            }    
        }   
    }
`;

// This will be used elsewhere
function Organisaion({organisaionID}) {
    const { loading, error, data } = useQuery(GET_BOARDS, {
        variables: {organisaionID},
    })

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return data
}
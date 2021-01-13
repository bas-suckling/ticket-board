import { gql, useQuery } from '@apollo/client';

const GET_ORGANISATION = gql`
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
    const { loading, error, data } = useQuery(GET_ORGANISATION, {
        variables: {organisaionID},
    })

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return data
}
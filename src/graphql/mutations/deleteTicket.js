import { gql } from '@apollo/client';

//Delete a ticket
export const DELETE_TICKET = gql`
    mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
        deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
            id
            name
            description
            status
            visible
        }
    }
`;
import { gql, useQuery } from '@apollo/client';

//To create a ticket don't pass an id
export const PUT_TICKET = gql`
    mutation putTicket($organisationId: ID!, $boardId: ID!, $ticketId: ID $input: TicketInput!) {
        putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: $ticketId, input: $input) {
            id
            name
            description
            status
            visible
        }
    }
`;


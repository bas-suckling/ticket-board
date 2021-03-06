import { gql } from "@apollo/client";

// queries using organisationID and returns org info and array of boards, which each contain an array of tickets
export const GET_BOARDS = gql`
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
        tickets {
          id
          name
          description
          status
          visible
        }
      }
    }
  }
`;

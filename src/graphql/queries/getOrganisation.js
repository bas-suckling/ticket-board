import { gql, useQuery } from '@apollo/client';
import React from 'react'

const GET_ORGANISATION = gql`
    query organisation(d8430294-c8d2-457d-a558-456be4ae57b8: ID!) {
        organisation(organisationId: d8430294-c8d2-457d-a558-456be4ae57b8) {
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

// this will be used elsewhere
function Organisaion() {
    const { loading, error, data } = useQuery(GET_ORGANISATION)

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <h1>{data}</h1>
    )
}
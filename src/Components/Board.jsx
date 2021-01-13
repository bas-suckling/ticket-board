import { useQuery } from '@apollo/client';
import { GET_TICKETS } from '../graphql/queries/getTickets';
import {organisationId} from '../organisation'
import Ticket from './Ticket'

function TicketLoader({board}) {
    const { loading, error, data } = useQuery(GET_TICKETS, {
        variables: {organisationId, boardId:board.id},
    })
    
      if (loading) return "loading";
      if (error) return `Error! ${error}`;
    
      return <ul>
          {data.board.tickets.map((ticket) => <li key={ticket.id}><Ticket board={board} ticket={ticket} /></li>)}
          </ul>;

}

function Board({board}) {
    
  return (
    <div className="board">
        <h2>{board.name} Board</h2>
        <TicketLoader board={board}/>
    </div>
  );
  }

export default Board;
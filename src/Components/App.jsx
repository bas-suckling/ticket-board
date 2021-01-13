import { useQuery } from '@apollo/client';
import '../App.css';
import { GET_BOARDS } from '../graphql/queries/getBoards'
import { organisationId } from '../organisation'
import Board from './Board'
import NewBoardButton from './NewBoardButton';

function BoardLoader() {
  const { loading, error, data } = useQuery(GET_BOARDS, {
    variables: { organisationId },
  })

  if (loading) return "loading";
  if (error) return `Error! ${error}`;

  return data.organisation.boards.map((board) => <Board key={board.id} board={board} />)

}

function App() {

  return <div className="application">
    <h1>Ticket Board Application</h1>
    <BoardLoader />
    <NewBoardButton/>
    <h6>Made by <a href="https://www.bas-suckling.com">Bas Suckling</a></h6>

  </div>



  // }
}

export default App;

import './App.css';
import React, {useState, useEffect} from 'react'
import TicketBoard from './TicketBoard'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("bas-suckling")
      .then(res => console.log(res.json()))
      .then(
        (result) => {
          setIsLoaded(true);
          setTickets(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div className="App">
      <h1>Ticket Board Application</h1>

      <TicketBoard ticketData={tickets}/>

      <h6>Made by <a href="https://www.bas-suckling.com">Bas Suckling</a></h6>
    </div>
  );
}
}

export default App;

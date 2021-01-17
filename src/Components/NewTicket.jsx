import NewTicketForm from "./NewTicketForm";
import { useState } from "react";

function NewTicket({ board }) {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => setIsVisible(!isVisible);

  return (
    <>
      <button onClick={onClick}>Create New Ticket</button>
      {isVisible ? (
        <NewTicketForm board={board} onSubmit={() => setIsVisible(false)} />
      ) : (
        <br />
      )}
    </>
  );
}

export default NewTicket;

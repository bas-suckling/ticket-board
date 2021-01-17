import NewBoardForm from "./NewBoardForm";
import { useState } from "react";

function NewBoard({ organisation }) {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => setIsVisible(!isVisible);

  return (
    <>
      <button onClick={onClick}>Create New Board</button>
      {isVisible ? (
        <NewBoardForm
          organisation={organisation}
          onSubmit={() => setIsVisible(false)}
        />
      ) : (
        <br />
      )}
    </>
  );
}

export default NewBoard;

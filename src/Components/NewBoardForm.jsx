import { gql, useMutation } from "@apollo/client";
import React from "react";
import { PUT_BOARD } from "../graphql/mutations/putBoard";
import { organisationId } from "../organisation";
import { useInput } from "./hooks/useInput";

function NewBoardForm({ organisation, onSubmit }) {
  const { value: name, bind: bindName, reset: resetName } = useInput("");

  const [newBoard] = useMutation(PUT_BOARD, {
    update: (cache, { data: { putBoard } }) => {
      cache.modify({
        id: cache.identify(organisation),
        fields: {
          boards(existingBoards = []) {
            const newBoardRef = cache.writeFragment({
              data: putBoard,
              fragment: gql`
                fragment putBoard on Board {
                  id
                  name
                  createdAt
                  updatedAt
                  tickets
                }
              `,
            });
            return [...existingBoards, newBoardRef];
          },
        },
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        newBoard({ variables: { organisationId, input: { name } } });
        resetName();
        onSubmit?.();
      }}
    >
      <label>Board Name</label>
      <input name="name" required {...bindName} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewBoardForm;

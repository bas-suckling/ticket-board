import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(null);

  return {
    value: value ?? initialValue,
    setValue,
    reset: () => setValue(null),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};

import { useState } from "react";

// initialValue = 초기값, regex = 정규식
export const useInput = (initialValue, regex) => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = (event) => {
    let willUpdate = true;
    if (typeof regex === "string") {
      willUpdate = regex.test(value);
    }
    if (willUpdate) {
      setValue(event);
    }
  };
  return { value, onChangeText };
};

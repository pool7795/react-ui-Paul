import { useState, useEffect } from "react";

export default function useLocalStorage(key, value) {
  const [initialValue, setInitialValue] = useState(value);

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      setInitialValue(JSON.parse(localStorage.getItem(key)));
    }
  }, []);

  function setValue(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setInitialValue(newValue);
  }

  return [initialValue, setValue];
}

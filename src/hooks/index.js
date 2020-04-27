import { useState, useEffect } from "react";

export function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
}

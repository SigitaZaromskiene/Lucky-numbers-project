import { createContext } from "react";
import { useState, useEffect } from "react";
import { useRead } from "./useRead";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [luckyNumber, setLuckyNumber] = useState(1);
  const [numbersList, setNumbersList] = useState(null);
  // const [usersList, setUsersList] = useState(null);

  const [usersList, setResponse] = useRead();

  useEffect(() => {
    setResponse(Date.now());
  }, [setResponse]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        luckyNumber,
        setLuckyNumber,
        numbersList,
        setNumbersList,
        usersList,
        setResponse,
      }}
    >
      {children}
    </Global.Provider>
  );
};

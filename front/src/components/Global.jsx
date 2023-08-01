import { createContext } from "react";
import { useState, useEffect } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [luckyNumber, setLuckyNumber] = useState(1);
  const [numbersList, setNumbersList] = useState(null);
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    setUsersList(Date.now());
  }, [setUsersList]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        luckyNumber,
        setLuckyNumber,
        numbersList,
        setNumbersList,
        setUsersList,
        usersList,
      }}
    >
      {children}
    </Global.Provider>
  );
};

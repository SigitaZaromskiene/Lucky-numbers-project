import { createContext } from "react";
import { useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [luckyNumber, setLuckyNumber] = useState(1);
  const [numbersList, setNumbersList] = useState(null);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        luckyNumber,
        setLuckyNumber,
        numbersList,
        setNumbersList,
      }}
    >
      {children}
    </Global.Provider>
  );
};

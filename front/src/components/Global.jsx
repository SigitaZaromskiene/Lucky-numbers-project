import { createContext } from "react";
import { useState, useEffect } from "react";
import { useRead } from "./useRead";
import { useWriteNumber } from "./useWriteNumber";
import { useUsersDelete } from "./useUsersDelete";
import { useReadNumbers } from "./useReadNumbers";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");

  // const [numbersList, setNumbersList] = useState(null);

  const [usersList, setResponse] = useRead();

  const [deleteNumberUpdate, setDeleteUsers] = useUsersDelete();

  const [numberList, setResponseNumber] = useReadNumbers();
  const [response, setCreateNumber] = useWriteNumber();

  console.log(numberList);

  useEffect(() => {
    setResponse(Date.now());
  }, [setResponse]);

  useEffect(() => {
    setResponseNumber(Date.now());
  }, [setResponseNumber]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        response,
        setCreateNumber,
        setDeleteUsers,
        usersList,
        setResponse,
        numberList,
        setResponseNumber,
      }}
    >
      {children}
    </Global.Provider>
  );
};

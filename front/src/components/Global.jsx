import { createContext } from "react";
import { useState, useEffect } from "react";
import { useRead } from "./useRead";
import { useWriteNumber } from "./useWriteNumber";
import { useUsersDelete } from "./useUsersDelete";
import { useReadNumbers } from "./useReadNumbers";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [message, setMessage] = useState("");

  // users
  const [usersList, setResponse] = useRead();
  const [deleteNumberUpdate, setDeleteUsers] = useUsersDelete();

  // numbers

  const [numberList, setResponseNumber] = useReadNumbers();
  const [response, setCreateNumber, setDeleteNumber, setEditNumber] =
    useWriteNumber();

  useEffect(() => {
    setResponse(Date.now());
  }, [usersList]);

  useEffect(() => {
    setResponseNumber(Date.now());
  }, [response]);

  // useEffect(() => {
  //   setDeleteUsers(Date.now());
  // }, [deleteNumberUpdate]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        response,
        setCreateNumber,
        setDeleteNumber,
        usersList,
        setResponse,
        numberList,
        setResponseNumber,
        setEditNumber,
        setDeleteUsers,
        setMessage,
        message,
      }}
    >
      {children}
    </Global.Provider>
  );
};

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

  // login

  const [logged, setLogged] = useState(null);
  const [loggedUserName, setLoggedUserName] = useState("");
  const [authRole, setAuthRole] = useState(null);

  useEffect(() => {
    setResponse(Date.now());
  }, [deleteNumberUpdate]);

  useEffect(() => {
    setResponseNumber(Date.now());
  }, [response]);

  useEffect(() => {
    setLogged(null);
  }, [route]);

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
        logged,
        setLogged,
        loggedUserName,
        setLoggedUserName,
        authRole,
        setAuthRole,
      }}
    >
      {children}
    </Global.Provider>
  );
};

import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:3003/users";

export const useRead = () => {
  const [response, setResponse] = useState(null);
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    if (response === null) {
      return;
    }
    axios
      .get(URL, { withCredentials: true })
      .then((res) => setUsersList(res.data));
  }, [response]);

  return [usersList, setResponse];
};

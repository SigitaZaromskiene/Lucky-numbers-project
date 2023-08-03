import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:3003/users";

export const useUsersDelete = () => {
  const [deleteUsers, setDeleteUsers] = useState(null);
  const [deleteNumberUpdate, setDeleteNumberUpdate] = useState(null);

  useEffect(() => {
    if (deleteUsers === null) {
      return;
    }
    axios
      .delete(URL + "/" + deleteUsers.id, { withCredentials: true })
      .then((res) => setDeleteNumberUpdate(res.data));
  }, [deleteUsers]);

  return [deleteNumberUpdate, setDeleteUsers];
};

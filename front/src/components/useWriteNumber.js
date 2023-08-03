import { useEffect, useState } from "react";
import axios from "axios";
const URL = "http://localhost:3003/numbers";

export const useWriteNumber = (_) => {
  const [response, setResponse] = useState(null);
  const [createNumber, setCreateNumber] = useState(null);
  const [destroyNumber, setDeleteNumber] = useState(null);
  const [editNumber, setEditNumber] = useState(null);

  useEffect(() => {
    if (null === createNumber) {
      return;
    }
    axios
      .post(URL, createNumber, { withCredentials: true })
      .then((res) => setResponse(res.data));
  }, [createNumber]);

  useEffect(() => {
    if (null === destroyNumber) {
      return;
    }
    axios
      .delete(URL + "/" + destroyNumber.id, { withCredentials: true })
      .then((res) => setResponse(res.data));
  }, [destroyNumber]);

  useEffect(() => {
    if (null === editNumber) {
      return;
    }
    axios
      .put(
        URL + "/" + editNumber.id,
        { number: editNumber.number },
        { withCredentials: true }
      )
      .then((res) => {
        setResponse(res.data);
      });
  }, [editNumber]);

  return [response, setCreateNumber, setDeleteNumber, setEditNumber];
};

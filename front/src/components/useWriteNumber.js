import { useEffect, useState } from "react";
import axios from "axios";
const URL = "http://localhost:3003/numbers";

export const useWriteNumber = (_) => {
  const [response, setResponse] = useState(null);
  const [createNumber, setCreateNumber] = useState(null);
  const [destroyNumber, setDeleteNumber] = useState(null);
  const [editNumber, setEditNumber] = useState(null);

  // useEffect(() => {
  //   if (null === edit) {
  //     return;
  //   }
  //   axios
  //     .put(
  //       URL + "/" + edit.action + "/" + edit.id,
  //       { number: edit.number },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       setResponse(res.data);
  //     });
  // }, [edit]);

  useEffect(() => {
    if (null === createNumber) {
      return;
    }
    axios
      .post(URL, createNumber, { withCredentials: true })
      .then((res) => setResponse(res.data));
  }, [createNumber]);

  // useEffect(() => {
  //   if (null === destroy) {
  //     return;
  //   }
  //   axios
  //     .delete(URL + "/" + destroy.id, { withCredentials: true })
  //     .then((res) => setResponse(res.data));
  // }, [destroy]);

  return [response, setCreateNumber];
};

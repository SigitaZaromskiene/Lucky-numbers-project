import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:3003/numbers";

export const useReadNumbers = () => {
  const [responseNumber, setResponseNumber] = useState(null);
  const [numberList, setNumberList] = useState(null);

  useEffect(() => {
    if (responseNumber === null) {
      return;
    }
    axios
      .get(URL, { withCredentials: true })
      .then((res) => setNumberList(res.data));
  }, [responseNumber]);

  return [numberList, setResponseNumber];
};

import axios from "axios";
import { useEffect, useContecxt, useState } from "react";

const URL = "http://localhost:3003/register";

export const useWriteRegister = () => {
  const [registerInfo, setRegisterInfo] = useState(null);
  const [registerUpdate, setRegisterUpdate] = useState(null);

  useEffect(() => {
    if (null === registerInfo) {
      return;
    }
    axios
      .post(URL, registerInfo, { withCredentials: true })
      .then((res) => setRegisterUpdate(res.data));
  }, [registerInfo]);

  return [registerUpdate, setRegisterInfo];
};

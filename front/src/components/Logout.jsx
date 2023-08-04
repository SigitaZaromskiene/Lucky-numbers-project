import axios from "axios";
import { useContext, useEffect } from "react";
import { Global } from "./Global";

function Logout() {
  const { setLogged, setRoute } = useContext(Global);

  const logoutHandler = () => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setLogged(false);
        setRoute("home");
      });
  };
  return <li onClick={logoutHandler}>Logout</li>;
}

export default Logout;

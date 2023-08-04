import axios from "axios";
import { useContext, useEffect } from "react";
import { Global } from "./Global";

function Logout() {
  const { setLogged, setRoute, setLoggedUserName } = useContext(Global);

  const logoutHandler = () => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setLogged(false);
        setRoute("home");
        setLoggedUserName(null);
      });
  };
  return <li onClick={logoutHandler}>Logout</li>;
}

export default Logout;

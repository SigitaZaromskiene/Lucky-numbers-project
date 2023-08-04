import Loader from "./Loader";
import { useContext } from "react";
import { Global } from "./Global";
import AuthErrorPage from "./AuthErrorPage";
import axios from "axios";
import { useEffect } from "react";
import Login from "./Login";

function Auth({ children, roles }) {
  console.log(roles);
  const {
    logged,
    setLogged,
    setLoggedUserName,
    setAuthRole,
    setRoute,
    route,
    setResponse,
    setResponseNumber,
  } = useContext(Global);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data.status === "ok") {
          setLoggedUserName(res.data.name);
          setAuthRole(res.data.role);
          if (roles) {
            if (roles.split(",").includes(res.data.role)) {
              setLogged(1);
              if (route === "numbers") {
                setResponseNumber(Date.now());
              } else if (route === "users") {
                setResponse(Date.now());
              }
            } else {
              setLogged(3);
            }
          } else {
            setLogged(1);
          }
        } else {
          setLoggedUserName(null);
          setAuthRole(null);
          if (roles.length) {
            setLogged(2);
          } else {
            setLogged(1);
          }
        }
      });
  }, [roles]);

  if (null === logged) {
    return <Loader />;
  }

  if (1 === logged) {
    return <>{children}</>;
  }
  if (2 === logged) {
    return <Login />;
  }
  if (3 === logged) {
    return <AuthErrorPage />;
  }
}

export default Auth;

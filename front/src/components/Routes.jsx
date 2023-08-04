import { useContext } from "react";
import { Global } from "./Global";
import Numbers from "./Numbers";
import Home from "./Home";
import Users from "./Users";
import Login from "./Login";
import Register from "./Register";
import Auth from "./Auth";

function Routes() {
  const { route } = useContext(Global);

  switch (route) {
    case "home":
      return (
        <Auth roles={""}>
          <Home></Home>
        </Auth>
      );
    case "numbers":
      return (
        <Auth roles={"manager, admin"}>
          <Numbers></Numbers>
        </Auth>
      );
    case "users":
      return (
        <Auth roles={"admin"}>
          <Users></Users>
        </Auth>
      );
    case "login":
      return <Login></Login>;
    case "register":
      return <Register></Register>;
    default:
      return null;
  }
}

export default Routes;

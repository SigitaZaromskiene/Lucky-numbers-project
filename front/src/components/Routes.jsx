import { useContext } from "react";
import { Global } from "./Global";
import Numbers from "./Numbers";
import Home from "./Home";
import Users from "./Users";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  const { route } = useContext(Global);

  switch (route) {
    case "home":
      return <Home></Home>;
    case "numbers":
      return <Numbers></Numbers>;
    case "users":
      return <Users></Users>;
    case "login":
      return <Login></Login>;
    case "register":
      return <Register></Register>;
    default:
      return null;
  }
}

export default Routes;

import "./App.css";
import Nav from "./components/Nav";
import { GlobalProvider } from "./components/Global";
import Routes from "./components/Routes";

function App() {
  return (
    <GlobalProvider>
      <Nav></Nav>
      <Routes></Routes>
    </GlobalProvider>
  );
}

export default App;

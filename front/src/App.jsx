import "./App.css";
import Nav from "./components/Nav";
import { GlobalProvider } from "./components/Global";
import Routes from "./components/Routes";
import Message from "./components/Message";
import { useState } from "react";

function App() {
  return (
    <GlobalProvider>
      <Nav></Nav>
      <Routes></Routes>
    </GlobalProvider>
  );
}

export default App;

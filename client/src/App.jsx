// import { useEffect } from "react";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import { useGlobalContext } from "./context";
import "./App.css";

function App() {
  const { state, dispatch } = useGlobalContext();

  if (state.logIn) {
    return (
      <>
        <AuthPage />
      </>
    );
  } else if (state.register) {
    return (
      <>
        <AuthPage />
      </>
    );
  } else if (state.dashboard) {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}

export default App;

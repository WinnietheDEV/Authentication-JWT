import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import reducer from "./reducer";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);
export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const defaultState = {
    logIn: true,
    register: false,
    dashboard: false,
  };

  const currentState =
    JSON.parse(localStorage.getItem("state")) || defaultState;

  const [state, dispatch] = useReducer(reducer, currentState);
  const [user, setUser] = useState("");
  const [err, setErr] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        user,
        setUser,
        err,
        setErr,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

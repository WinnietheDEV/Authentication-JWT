import { useEffect } from "react";
import React, { useGlobalContext } from "../context";
import axios from "axios";
const Dashboard = () => {
  const { state, dispatch, user, setUser } = useGlobalContext();
  const directLogin = () => {
    dispatch({ type: "DIRECT_LOGIN" });
  };

  const url = "http://localhost:3000/api/v1/dashboard";

  const getDashboard = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(url, config)
      .then((res) => setUser({ username: res.data.username }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDashboard();
  }, []);

  return (
    <section className="dashboard">
      <div className="section-center">
        <header>
          <h2>Dashboard</h2>
          <button
            className="btn close"
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("token");
              directLogin();
            }}
          >
            log out
          </button>
        </header>
        <section className="content">
          <h2>{`welcome ${user.username}` || `loading`}</h2>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;

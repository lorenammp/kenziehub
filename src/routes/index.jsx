import { useEffect, useState } from "react";

import { Routes, Route } from "react-router";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function MainRoutes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              user={user}
              setUser={setUser}
            />
          }
        />
      </Routes>
    </>
  );
}

export default MainRoutes;

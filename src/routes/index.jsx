import { useEffect, useState } from "react";

import { Switch, Route } from "react-router";
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
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setUser={setUser}
        />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
          setUser={setUser}
        />
      </Route>
    </Switch>
  );
}

export default MainRoutes;

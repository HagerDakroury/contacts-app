import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "../pages/landing/Landing";
import { Signup } from "../pages/signup/Signup";
import { Signin } from "../pages/signin/Signin";

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
};

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Landing } from "../pages/landing/Landing";
import { Signup } from "../pages/signup/Signup";
import { Signin } from "../pages/signin/Signin";
import { ContactsList } from "../pages/contacts/ContactsList";

export const MainRouter = () => {
  if (!localStorage.getItem("user"))
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
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <ContactsList />
        </Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
};

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import AppContainer from "./Components/Containers/AppContainer";
import Home from "./Components/Pages/Home";

import RegisterEstablishment from "./Components/Pages/Establishment/RegisterEstablishment";
import ShowEstablishment from "./Components/Pages/Establishment/ShowEstablishment";
import FindEstablishment from "./Components/Pages/Establishment/FindEstablishment";
import EditEstablishment from "./Components/Pages/Establishment/EditEstablishment";
import ListEstablishments from "./Components/Pages/Establishment/ListEstablishments";
import About from "./Components/Pages/About";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <AppContainer>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/registerEstablishment">
            <RegisterEstablishment />
          </Route>
          <Route path="/findEstablishment">
            <FindEstablishment />
          </Route>
          <Route path="/showEstablishment">
            <ShowEstablishment />
          </Route>
          <Route path="/listEstablishments">
            <ListEstablishments />
          </Route>
          <Route path="/editEstablishment">
            <EditEstablishment />
          </Route>
        </AppContainer>
      </Switch>
    </Router>
  );
}

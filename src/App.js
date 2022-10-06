import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PropertyManagerDashboard from "./Pages/Dashboards/PropertyManagement/PropertyManagerDashboard";
import SingleProperty from "./Pages/Dashboards/PropertyManagement/SingleProperty/SingleProperty";
import Home from "./Pages/Home/Home/Home";
import PageTwo from "./Pages/Page2/PageTwo/PageTwo";
import PageFive from "./Pages/Page5/Page5/PageFive";
import PropertyFactFind from "./Pages/Property Fact Find/PropertyFactFind/PropertyFactFind";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/page2">
            <PageTwo />
          </Route>
          <Route path="/page5">
            <PageFive />
          </Route>
          <Route path="/single-property/:id">
            <SingleProperty />
          </Route>
          <Route path="/property-manager-dashboard">
            <PropertyManagerDashboard />
          </Route>
          <Route path="/property-fact-find">
            <PropertyFactFind />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

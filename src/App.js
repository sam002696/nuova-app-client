import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminDashboard from "./Pages/Dashboards/Admin/AdminDashboard";
import ContractorPortalDashboard from "./Pages/Dashboards/ContractorPortal/ContractorPortalDashboard";
import LandlordPortalDashboard from "./Pages/Dashboards/LandlordPortal/LandlordPortalDashboard";
import PropertyManagerDashboard from "./Pages/Dashboards/PropertyManagement/PropertyManagerDashboard";
import SingleProperty from "./Pages/Dashboards/PropertyManagement/SingleProperty/SingleProperty";
import TenantPortalDashboard from "./Pages/Dashboards/TenantPortal/TenantPortalDashboard";
import Home from "./Pages/Home/Home/Home";
import PageTwo from "./Pages/Page2/PageTwo/PageTwo";
import PageThree from "./Pages/Page3/PageThree/PageThree";
import PageFour from "./Pages/Page4/PageFour/PageFour";
import PageFive from "./Pages/Page5/Page5/PageFive";

import PageSix from "./Pages/Page6/PageSix/PageSix";
import PricingHome from "./Pages/Pricing Structure/Pricing Home/PricingHome";
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

          <Route path="/page3">
            <PageThree />
          </Route>
          <Route path="/page4">
            <PageFour />
          </Route>
          <Route path="/page5">
            <PageFive />
          </Route>
          <Route path="/page6">
            <PageSix />
          </Route>
          <Route path="/single-property/:id">
            <SingleProperty />
          </Route>
          <Route path="/property-manager-dashboard">
            <PropertyManagerDashboard />
          </Route>
          <Route path="/tenant-portal-dashboard">
            <TenantPortalDashboard />
          </Route>
          <Route path="/contractor-portal-dashboard">
            <ContractorPortalDashboard />
          </Route>
          <Route path="/landlord-portal-dashboard">
            <LandlordPortalDashboard />
          </Route>
          <Route path="/admindashboard">
            <AdminDashboard />
          </Route>
          <Route path="/property-fact-find">
            <PropertyFactFind />
          </Route>
          <Route path="/pricing-structure">
            <PricingHome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

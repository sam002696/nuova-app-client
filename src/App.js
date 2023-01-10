import { useSelector } from "react-redux";
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
import ArrangePropertyViewing from "./Pages/Prospects/ArrangePropertyViewing/ArrangePropertyViewing";
import Prospects from "./Pages/Prospects/Prospects/Prospects";
import SinglePropertyViewing from "./Pages/Prospects/SinglePropertyViewing/SinglePropertyViewing";
import Login from "./Pages/Shared/Authentication/Login/Login";
import Register from "./Pages/Shared/Authentication/Register/Register";
import LandlordSingleProperty from "./Pages/Dashboards/LandlordPortal/LandlordPortalSingleProperty/LandlordSingleProperty";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
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
          <Route path="/propertyviewings">
            <Prospects />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/single-property-viewing/:id">
            <SinglePropertyViewing />
          </Route>
          <Route path="/arrange-property-viewing/:id">
            <ArrangePropertyViewing />
          </Route>
          <Route path="/single-property/:id">
            <SingleProperty />
          </Route>
          <Route path="/landlord-single-property/:id">
            <LandlordSingleProperty />
          </Route>
          {/* <Route path="/property-manager-dashboard">
            <PropertyManagerDashboard />
          </Route> */}

          {currentUser &&
            ((currentUser.role === "Contractor" && (
              <Route path="/contractor-portal-dashboard">
                {" "}
                <ContractorPortalDashboard />
              </Route>
            )) ||
              (currentUser.role === "Tenant" && (
                <Route path="/tenant-portal-dashboard">
                  <TenantPortalDashboard />
                </Route>
              )) ||
              (currentUser.role === "Landlord" && (
                <Route path="/landlord-portal-dashboard">
                  <LandlordPortalDashboard />
                </Route>
              )) ||
              (currentUser.role === "Property Manager" && (
                <Route path="/property-manager-dashboard">
                  <PropertyManagerDashboard />
                </Route>
              )))}

          {/* <Route path="/tenant-portal-dashboard">
            <TenantPortalDashboard />
          </Route>
          <Route path="/contractor-portal-dashboard">
            <ContractorPortalDashboard />
          </Route>
          <Route path="/landlord-portal-dashboard">
            <LandlordPortalDashboard />
          </Route> */}
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

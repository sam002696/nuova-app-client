import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./Pages/Home/Home/Home";
import PageTwo from "./Pages/Page2/PageTwo/PageTwo";
import PageFive from "./Pages/Page5/Page5/PageFive";

function App() {

  return (

    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/page2" >
            <PageTwo />
          </Route>
          <Route path="/page5" >
            <PageFive />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./Pages/Home/Home/Home";

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
        </Switch>
      </Router>
    </>

  );
}

export default App;

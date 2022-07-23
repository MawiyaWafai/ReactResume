import './App.css';
import Home from "./Home.js";
import Resume from "./Resume.js";
import Design from "./Design.js";
import Wave from './Wave.js';
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <div>
        <Wave />
      </div>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/Resume"> <Resume /> </Route>
          <Route exact path="/Design"> <Design /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
    <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
    </div>
  );
}

export default App;

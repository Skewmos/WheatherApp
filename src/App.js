import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  HOME from "./scenes/home/components/home";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <HOME/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

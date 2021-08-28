import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./reser.css";
import Login from "./pages/auth/login/index";
import Register from "./pages/auth/register/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="context"></div>
        <Switch>
          <Route path={"/"} exact component={about} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

function about() {
  return <h1>About</h1>;
}

export default App;

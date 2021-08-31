import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./reser.css";
import Login from "./pages/auth/login/index";
import Register from "./pages/auth/register/index";
import Products from "./pages/products/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="content">
          <Switch>
            <Route path={"/"} exact component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;

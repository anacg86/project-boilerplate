import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Homes from "../pages/Homes";
import Homes from "./pages/Homes";
import Example from "./pages/Example";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Products from "./pages/Products";

//esta seccion lleva a lugares distintos de la pagina , no traen informacion
function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homes} />
          <Route exact path="/product/:id" component={Example} />
          <Route exact path="/login" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/newexample" component={ExampleForm} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import GlobalStories from "./components/pages/GlobalStories";
import ShoppingCart from "./components/pages/ShoppingCart";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/globalstories" component={GlobalStories} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shoppingcart" component={ShoppingCart} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

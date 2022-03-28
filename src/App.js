import React from "react";
import Header from "./App/components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  About,
  Blogs,
  Contact,
  Error,
  Home,
  PostData,
  Services,
} from "./App/Pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route path="/blogs/:id" component={PostData} />
          <Route path="/about" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

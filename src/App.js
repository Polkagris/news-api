import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetail from "./Components/Article/ArticleDetail";

function App() {
  const [indexState, setIndexState] = useState(undefined);

  const indexCallback = articleIndex => {
    console.log("index i app:", articleIndex);
    setIndexState(articleIndex);
  };

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/articles"
            exact
            render={props => (
              <Articles {...props} indexCallback={indexCallback} />
            )}
          />
          <Route
            path="/articles/:id"
            render={props => (
              <ArticleDetail {...props} articleIndex={indexState} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import Topic from "./Components/Topic";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetail from "./Components/Article/ArticleDetail";

function App() {
  const [indexState, setIndexState] = useState(undefined);
  const [articleState, setArticleState] = useState({});

  const indexCallback = (article, articleIndex) => {
    console.log("index i app:", articleIndex);
    console.log("article i app:", article);
    setIndexState(articleIndex);
    setArticleState(article);
  };

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Topic} />
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
              <ArticleDetail
                {...props}
                articleIndex={indexState}
                article={articleState}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import Home from "../containers/Home";
import About from "../containers/About";

function Routes() {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} />
      <AppliedRoute path="/about" exact component={About} />
      {/* <Route
        path="/articles"
        exact
        render={props => (
          <Articles
            {...props}
            indexCallback={indexCallback}
            topicCallback={topicCallback}
          />
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
      <Route
        path="/search"
        exact
        render={props => (
          <ArticleWithTopic
            {...props}
            indexCallback={indexCallback}
            topicFromParent={topic}
          />
        )}
      /> */}
    </Switch>
  );
}

export default Routes;

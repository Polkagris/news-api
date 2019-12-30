import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import Topic from "./containers/About";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetail from "./Components/Article/ArticleDetail";
import ArticleWithTopic from "./Components/ArticleWithTopic";
import Routes from "./Components/Routes";

function App() {
  const [indexState, setIndexState] = useState(undefined);
  const [articleState, setArticleState] = useState({});
  const [topic, setTopic] = useState("");

  const indexCallback = (article, articleIndex) => {
    console.log("index i app:", articleIndex);
    console.log("article i app:", article);
    setIndexState(articleIndex);
    setArticleState(article);
  };

  const topicCallback = topicFromChild => {
    setTopic(topicFromChild);
    console.log("topic in sum comp:", topicFromChild);
  };

  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;

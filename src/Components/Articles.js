import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Articles(props) {
  const [items, setItems] = useState([]);
  const [indexState, setIndexState] = useState(undefined);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "sources=bbc-news&" +
      "apiKey=4355957195de4294ad512147dbb0167a";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.articles);
        setItems(data.articles);
      });
  };

  // Get article index
  useEffect(() => {
    getArticleIndex();
  }, []);

  // Function for getting the index from map
  const getArticleIndex = index => {
    // Parent callback function
    props.indexCallback(index);
  };

  return (
    <div style={css.articleContainer}>
      <h1>Articles</h1>
      {items.map((item, index) => (
        <Link
          style={css.link}
          to={`/articles/${item.url}`}
          key={item.url}
          onClick={() => getArticleIndex(index)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

const css = {
  link: {
    //display: "flex"
  },

  articleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Articles;

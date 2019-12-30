import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ArticleWithTopic(props) {
  const [items, setItems] = useState([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    getArticleIndex();
    getTopicHandler();
    console.log(
      "Topic from callback in app and sent down to articleWithTopic:",
      props.topicFromParent
    );
  }, []);

  // Callback-function for getting the index and correct article from map
  const getArticleIndex = (item, index) => {
    props.indexCallback(item, index);
  };

  const onTopicChangeHandler = e => {
    // If new input use topic
    setTopic(e.target.value);
  };

  const getTopicHandler = () => {
    //setTopic(props.topicFromParent);
    const url =
      "https://newsapi.org/v2/everything?" +
      `q=${topic == "" ? props.topicFromParent : topic}&` +
      "pageSize=10&" +
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

  return (
    <div style={css.articlesContainer}>
      <h1 style={css.title}>Top Stories Right Now</h1>
      <div style={css.topicContainer}>
        <input
          onChange={onTopicChangeHandler}
          type="text"
          style={css.topicInput}
        />
        <button onClick={getTopicHandler} style={css.topicSearchButton}>
          Search Topic
        </button>
      </div>
      <label />
      {items.map((item, index) => (
        <div style={css.itemContainer}>
          <img src={item.urlToImage} alt="Image" style={css.articleImage} />
          <Link
            style={css.link}
            to={`/articles/${item.url}`}
            key={item.url}
            onClick={() => getArticleIndex(item, index)}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

const css = {
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "30px",
    width: "70%",
    fontWeight: "bold"
  },
  title: {
    width: "100%",
    textAlign: "center"
  },
  topicContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "20px 0"
  },
  topicInput: {
    display: "inlineBlock",
    padding: "10px 15px",
    fontSize: "20px",
    borderRadius: 0,
    border: "1px solid gray"
  },
  topicSearchButton: {
    backgroundColor: "green",
    color: "white",
    display: "inlineBlock",
    padding: "10px 15px",
    fontSize: "20px",
    borderRadius: 0,
    border: "1px solid transparent",
    cursor: "pointer"
  },
  articlesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    //  For more newspaper like feel
    //maxWidth: "50%",
    maxWidth: "500px",
    margin: "0 30px 20px 20px"
  },
  articleImage: {
    height: "300px"
  }
};

export default ArticleWithTopic;

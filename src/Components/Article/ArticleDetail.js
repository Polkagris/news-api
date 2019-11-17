import React, { useState, useEffect } from "react";

function ArticleDetail(props) {
  /*   const [item, setItem] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "sources=bbc-news&" +
    "apiKey=4355957195de4294ad512147dbb0167a";

  const fetchItem = async () => {
    const data = await fetch(url);
    const item = await data.json();
    setItem(item.articles[props.articleIndex]);
    console.log(item.articles[props.articleIndex]);
  };

  console.log(`Article nr. ${props.articleIndex}`, item);
 */
  return (
    <div>
      {props.article !== undefined ? (
        <div style={css.articleContainer}>
          <h1>{props.article.title}</h1>
          <img
            src={props.article.urlToImage}
            alt={props.article.urlToImage}
          />{" "}
          <p style={css.description}>{props.article.description}</p>
          <p style={css.content}>{props.article.content}</p>
          <a href={props.article.url}>Full article: {props.article.url}</a>
          <h2>{props.article.title}</h2>
        </div>
      ) : (
        false
      )}
      <h1>{props.articleIndex}</h1>
    </div>
  );
}

const css = {
  articleContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "70%",
    /* justifyContent: "center",
    alignItems: "center", */
    margin: "0 auto",
    padding: "15px",
    backgroundColor: "#eeee"
  },
  description: {
    fontSize: "28px",
    fontWeight: 600
  },
  content: {
    fontSize: "25px",
    fontWeight: 400
  }
};

export default ArticleDetail;

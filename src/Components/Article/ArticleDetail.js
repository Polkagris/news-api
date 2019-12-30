import React from "react";
import { Link } from "react-router-dom";

function ArticleDetail(props) {
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
          <Link to={`/search`} key={props.article.url}>
            Back to search
          </Link>
          <Link to={`/articles`} key={props.article.title}>
            Back to Home
          </Link>
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

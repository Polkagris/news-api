import React, { useState, useEffect } from "react";

function ArticleDetail(props) {
  const [item, setItem] = useState([]);

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

  return (
    <div>
      {item !== undefined ? (
        <div>
          <h1>{item.title}</h1>
          <img src={item.urlToImage} alt={item.urlToImage} />{" "}
          <p>{item.content}</p>
        </div>
      ) : (
        false
      )}
      <h1>{props.articleIndex}</h1>
    </div>
  );
}

export default ArticleDetail;

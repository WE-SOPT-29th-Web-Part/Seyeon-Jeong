import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Article from "./Article";

function Articles() {
  axios.defaults.baseURL = "http://localhost:4000";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await axios.get("/article");
        console.log(data);
        setArticles(data.reverse());
      } catch (err) {
        console.error(err);
      }
    };
    getArticles();
  }, []);
  const renderArticles = () => {
    return articles.map((article) => <Article info={article} />);
  };
  return <StyledArticles>{renderArticles()}</StyledArticles>;
}
const StyledArticles = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-basis: 30vh;
`;

export default Articles;

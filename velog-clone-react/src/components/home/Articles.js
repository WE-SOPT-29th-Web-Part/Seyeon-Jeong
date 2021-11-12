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
        setArticles(data);
        console.log(data);
      } catch (err) {}
    };
    getArticles();
  }, []);
  const renderAtricles = () => {
    const newestArticles = articles.reverse();
    return newestArticles.map((article) => <Article info={article} />);
  };
  return <StyledArticles>{renderAtricles()}</StyledArticles>;
}
const StyledArticles = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-basis: 30vh;
`;

export default Articles;

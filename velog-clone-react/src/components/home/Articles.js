import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Article from "./Article";
import fetcher from "../../api/api";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await fetcher.get();
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
`;

export default Articles;

import React from "react";
import styled from "styled-components";
function Article({ info }) {
  const { title, summary, date } = info;
  return (
    <StyledArticle>
      <div className="title">{title}</div>
      <div className="summary">{summary}</div>
      <div className="date">{date}</div>
    </StyledArticle>
  );
}
const StyledArticle = styled.div`
  border-bottom: 2px solid whitesmoke;
  padding: 100px 0;
  cursor: pointer;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(52, 58, 64);
    padding: 10px 0;
  }
  .summary {
    margin-bottom: 30px;
  }
  .date {
    color: gray;
  }
`;
export default Article;

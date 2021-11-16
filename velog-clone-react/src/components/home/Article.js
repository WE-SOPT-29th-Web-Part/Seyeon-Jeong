import React from "react";
import styled from "styled-components";
function Article({ info }) {
  const { title, summary, tags, date } = info;
  return (
    <StyledArticle>
      <div className="title">{title}</div>
      <div className="summary">{summary}</div>
      {tags.map((tag) => (
        <StyledTag>{tag}</StyledTag>
      ))}
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
    margin-top: 15px;
  }
`;
const StyledTag = styled.div`
  display: inline-block;
  height: 32px;
  padding: 0 20px;
  line-height: 32px;
  background: rgb(241, 243, 245);
  border-radius: 15px;
  color: mediumseagreen;
  margin-right: 5px;
  margin-bottom: 5px;
  white-space: nowrap;
`;
export default Article;

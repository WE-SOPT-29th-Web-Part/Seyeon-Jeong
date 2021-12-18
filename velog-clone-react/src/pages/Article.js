import React from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import fetcher from "../api/api";
export default function Article() {
  const location = useLocation();
  const navigate = useNavigate();
  const { body, date, id, summary, tags, thumbnail, title } = location.state;

  const updateArticle = () => {
    navigate(`/post/update/${id}`, { state: location.state });
  };
  const deleteArticle = async () => {
    await fetcher.delete(id);
    navigate("/");
  };
  const renderTags = () => {
    return tags.map((tag) => <StyledTag>{tag}</StyledTag>);
  };

  return (
    <StyledArticle>
      <StyledHeaderWrapper>
        <StyledInfoWrapper>
          <h1>{title}</h1>
          <div>
            <StyledInfo>
              <span>seyeon</span>
              <span>·</span>
              <span>{date}</span>
            </StyledInfo>
            <StyledUpdateWrapper>
              <button onClick={updateArticle}>수정</button>
              <button onClick={deleteArticle}>삭제</button>
            </StyledUpdateWrapper>
          </div>
          <StyledTagInput>{renderTags()}</StyledTagInput>
        </StyledInfoWrapper>
        <img src={thumbnail} />
      </StyledHeaderWrapper>
      <StyledBodyWrapper>{body}</StyledBodyWrapper>
    </StyledArticle>
  );
}
const StyledArticle = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: rgb(248, 249, 250);
  box-sizing: border-box;
  padding: 3% 0;
`;
const StyledHeaderWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 600px;
  }
`;
const StyledInfoWrapper = styled.div`
  width: 100%;

  & > div {
    display: flex;
    width: 100%;
  }
  & > h1 {
    font-size: 3rem;
    font-weight: 700;
  }
`;
const StyledInfo = styled.div`
  display: flex;
  width: 100%;

  span:first-child {
    color: rgb(52, 58, 64);
    font-weight: bold;
  }
  span:nth-child(2) {
    margin: 0 10px;
  }
  span:last-child {
    color: rgb(73, 80, 87);
  }
`;
const StyledUpdateWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;

  button {
    margin: 0 5px;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: rgb(134, 142, 150);
    cursor: pointer;
  }
  button:hover {
    color: rgb(52, 58, 64);
  }
`;
const StyledTagInput = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  margin: 10px 0;
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
const StyledBodyWrapper = styled.div`
  width: 768px;
  margin: 30px auto;

  font-size: 1.125rem;
  font-weight: 500;
`;

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { gsap } from "gsap";
const Article = ({ info }) => {
  const { title, summary, tags, date, thumbnail, id } = info;
  const navigate = useNavigate();
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1.01,
      boxShadow: "0px 0px 6px rgba(0,0,0,0.1)",
      duration: 0.5,
    });
  };
  const navToArticle = () => {
    navigate(`./article/${id}`, { state: info });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      boxShadow: "none",
    });
  };
  useEffect(() => {
    const ani = gsap.fromTo(
      ".article",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
    return () => ani.kill();
  });
  return (
    <StyledArticle
      className="article"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={navToArticle}
    >
      <div className="title">{title}</div>
      {thumbnail.length ? <img src={thumbnail} alt="thumbnail" /> : null}
      <div className="summary">{summary}</div>
      {tags.map((tag) => (
        <StyledTag>{tag}</StyledTag>
      ))}
      <div className="date">{date}</div>
    </StyledArticle>
  );
};
const StyledArticle = styled.div`
  border-bottom: 2px solid whitesmoke;
  padding: 100px 10px;
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
  img {
    max-width: 600px;
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

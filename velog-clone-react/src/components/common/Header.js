import React from "react";
import styled from "styled-components";
import searchIcon from "../../assets/icons/search.svg";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import profileImage from "../../assets/images/dog.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <StyledHeader>
      <span className="title">SOPT.log</span>
      <img src={searchIcon} alt="search-icon" className="search" />
      <Link to="/post">
        <button className="new-post">새 글 작성</button>
      </Link>
      <img src={profileImage} alt="search-icon" className="profile" />
      <img src={arrowDownIcon} alt="arrow-down-icon" className="arrow" />
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  align-items: center;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: black;
  }
  .search {
    margin-left: auto;
  }
  .new-post {
    background-color: transparent;
    border-radius: 15px;
    border: 1px solid black;
    height: 30px;
    cursor: pointer;
    margin: 0 10px;
  }
  .new-post:hover {
    background-color: #63e6be;
    color: white;
    border: 1px solid #63e6be;
  }
  .title {
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Fira Mono", monospace;
  }

  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .arrow {
    margin-left: 10px;
  }
`;
export default Header;

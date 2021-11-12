import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
function Nav() {
  const [navMode, setNavMode] = useState("article");

  const changeNavMode = (mode) => {
    setNavMode(mode);
  };
  return (
    <StyledNav mode={navMode}>
      <div className="nav-container">
        <Link to="/" onClick={() => changeNavMode("article")}>
          글
        </Link>
        <Link to="/series" onClick={() => changeNavMode("series")}>
          시리즈
        </Link>
        <StyledUnderLine mode={navMode} />
      </div>
    </StyledNav>
  );
}
const StyledNav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  a {
    text-decoration: none;
    width: 7rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
  }
  a:nth-child(1) {
    color: ${({ mode }) => (mode === "article" ? "#63e6be" : "black")};
  }
  a:nth-child(2) {
    color: ${({ mode }) => (mode === "series" ? "#63e6be" : "black")};
  }
  .nav-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 14rem;
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
const StyledUnderLine = styled.div`
  width: 7rem;
  border-top: 3px solid #63e6be;
  position: absolute;
  top: 100%;
  left: ${({ mode }) => (mode === "article" ? 0 : "50%")};
  transition: left 0.5s;
`;
export default Nav;

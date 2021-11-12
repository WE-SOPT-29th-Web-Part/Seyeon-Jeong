import React from "react";
import styled from "styled-components";
function TitleInput() {
  return (
    <StyledTitleInput>
      <input maxLength="40" placeholder="제목을 입력하세요."></input>
    </StyledTitleInput>
  );
}
const StyledTitleInput = styled.div`
  input {
    width: 100%;
    height: 5vw;
    font-size: 2rem;
    padding: 20px 0;
    border: none;
    border-bottom: 2px solid whitesmoke;
    outline: none;
    background: transparent;
  }
`;
export default TitleInput;

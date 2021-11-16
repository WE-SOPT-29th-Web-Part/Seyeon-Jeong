import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg";
function Exit({ setPublishModal }) {
  const handlePublish = () => setPublishModal(true);

  return (
    <StyledExit>
      <Link to="/">
        <div className="exit-container">
          <ExitIcon />
          나가기
        </div>
      </Link>
      <div className="button-container">
        <button className="temp-save">임시저장</button>
        <button className="save" onClick={handlePublish}>
          출간하기
        </button>
      </div>
    </StyledExit>
  );
}
// 임시저장 출간하기
const StyledExit = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  a {
    color: black;
  }
  svg {
    margin: 0 5px;
  }
  a:hover,
  svg:hover {
    fill: #ff5a5a;
    color: #ff5a5a;
  }
  .exit-container {
    display: flex;
    align-items: center;
    float: left;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .button-container {
    margin: 0 auto;
  }
  .temp-save,
  .save {
    width: 80px;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
  }
  .save {
    background: mediumseagreen;
    color: white;
  }
  .temp-save:hover {
    background: lightgray;
  }
  .save:hover {
    background: green;
  }
`;
export default Exit;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg";
function Exit({ setPublishModal }) {
  const navigate = useNavigate();
  const handlePublish = () => setPublishModal(true);

  return (
    <StyledExit>
      <div className="exit-container" onClick={() => navigate(-1)}>
        <ExitIcon />
        나가기
      </div>

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

  svg {
    margin: 0 5px;
  }
  .exit-container {
    display: flex;
    align-items: center;
    float: left;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .exit-container:hover {
    fill: #ff5a5a;
    color: #ff5a5a;
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

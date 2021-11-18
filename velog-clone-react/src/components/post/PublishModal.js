import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
function PublishModal({ setPublishModal, newPost }) {
  const [summaryInput, setSummaryInput] = useState("");
  const navigate = useNavigate();
  const updateNewPost = () => {
    const date = new Date();
    const today = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
    newPost.summary = summaryInput;
    newPost.date = today;
  };
  const handleSummary = (e) => {
    if (e.target.value.length > 150) return;
    setSummaryInput(e.target.value);
  };
  const closeModal = () => setPublishModal(false);
  const publishData = async () => {
    updateNewPost();
    await axios.post("http://localhost:4000/article", newPost);
    navigate(-1);
  };
  return (
    <StyledPublishModal>
      <div className="title">포스트 미리보기</div>
      <input type="file"></input>
      <StyledPublishInfo>
        <div className="text-wrapper">
          <textarea
            value={summaryInput || ""}
            onChange={handleSummary}
          ></textarea>
          <StyledLimit
            length={summaryInput.length}
          >{`${summaryInput.length} / 150`}</StyledLimit>
        </div>
        <div className="button-wrapper">
          <button className="cancel" onClick={closeModal}>
            취소
          </button>
          <button className="publish" onClick={publishData}>
            출간하기
          </button>
        </div>
      </StyledPublishInfo>
    </StyledPublishModal>
  );
}
const StyledPublishModal = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: absolute;
  padding: 8rem;
  background-color: rgba(248, 249, 250, 0.9);

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  input {
    margin: 1rem 0;
  }
`;
const StyledPublishInfo = styled.div`
  display: flex;
  align-items: center;
  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
  }
  textarea {
    border: none;
    border-right: 2px solid lightgray;
    background-color: transparent;
    outline: none;
    resize: none;
    width: 40vw;
    height: 30vh;
    padding: 1rem;
    box-sizing: border-box;
  }
  .cancel,
  .publish {
    width: 80px;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
  }
  .publish {
    background: mediumseagreen;
    color: white;
  }
  .cancel:hover {
    background: lightgray;
  }
  .publish:hover {
    background: green;
  }
`;
const StyledLimit = styled.div`
  color: ${({ length }) => (length >= 150 ? "#FF5A5A" : "gray")};
  width: 100%;
  font-size: 0.7rem;
  text-align: end;
  margin-top: 10px;
  padding: 0 5px;
`;
export default PublishModal;

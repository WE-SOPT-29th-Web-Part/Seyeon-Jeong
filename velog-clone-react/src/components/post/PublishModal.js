import axios from "axios";
import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { gsap } from "gsap";
import styled from "styled-components";
function PublishModal({ setPublishModal, postInfo }) {
  const { info, forUpdate, id } = postInfo;
  const [summaryInput, setSummaryInput] = useState(info.summary);
  const [imgInfo, setImgInfo] = useState({
    imgName: null,
    imgUrl: info.thumbnail,
  });
  const [modalOpen, setModalOpen] = useState("");
  const navigate = useNavigate();

  const updateNewPost = () => {
    info.summary = summaryInput;
    info.thumbnail = imgInfo.imgUrl;
  };

  const handleSummary = (e) => {
    if (e.target.value.length > 150) return;
    setSummaryInput(e.target.value);
  };

  const closeModal = async () => {
    await modalOpen.reverse();
    setPublishModal(false);
  };

  const publishData = async () => {
    updateNewPost();
    forUpdate
      ? await axios.patch(`http://localhost:5005/api/article/${id}`, info)
      : await axios.post("http://localhost:5005/api/article", info);
    await gsap.to(".post", {
      opacity: 0,
      rotate: 180,
      duration: 1.5,
      ease: "elastic.in(1, 0.3)",
    });
    navigate("/");
  };

  const fileLoader = ({ target: { files } }) => {
    if (!files.length) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImgInfo({
        imgName: files.name,
        imgUrl: reader.result,
      });
    };
    reader.readAsDataURL(files[0]);
  };

  useLayoutEffect(() => {
    const instance = gsap.fromTo(
      ".modal",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    setModalOpen(instance);

    return () => {
      instance.kill();
    };
  }, []);
  return (
    <StyledPublishModal className="modal">
      <StyledPostWrapper>
        <div>
          <div className="title box1">포스트 미리보기</div>
          <input type="file" onChange={fileLoader}></input>
        </div>
        <img src={imgInfo.imgUrl} alt={imgInfo.imgName} />
      </StyledPostWrapper>
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
  background-color: rgb(248, 249, 250);

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  input {
    margin: 1rem 0;
    color: transparent;
  }
`;
const StyledPostWrapper = styled.div`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
  }
  img {
    max-width: 100px;
    max-height: 100px;
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

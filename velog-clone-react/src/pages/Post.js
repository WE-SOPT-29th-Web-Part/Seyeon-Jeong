import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Exit from "../components/post/Exit";
import PublishModal from "../components/post/PublishModal";
import StoryInput from "../components/post/StoryInput";
import TagInput from "../components/post/TagInput";
import TitleInput from "../components/post/TitleInput";
import { useLocation } from "react-router";
import { gsap } from "gsap";
function Post() {
  const { state } = useLocation();

  const [titleInput, setTitleInput] = useState(state ? state.title : "");
  const [storyInput, setStoryInput] = useState(state ? state.body : "");
  const [tags, setTags] = useState(state ? state.tags : []);
  const [publishModal, setPublishModal] = useState(false);
  const newPost = {
    title: titleInput,
    body: storyInput,
    tags,
    summary: state ? state.summary : "",
    thumbnail: state ? state.thumbnail : "",
  };
  useEffect(() => {
    const ani = gsap.to(".post", { duration: 1, ease: "bounce.out", y: 0 });
    return () => ani.kill();
  }, []);
  return (
    <StyledPost className="post">
      <TitleInput titleInput={titleInput} setTitleInput={setTitleInput} />
      <TagInput tags={tags} setTags={setTags} />
      <StoryInput storyInput={storyInput} setStoryInput={setStoryInput} />
      <Exit setPublishModal={setPublishModal} />
      {publishModal && (
        <PublishModal setPublishModal={setPublishModal} newPost={newPost} />
      )}
    </StyledPost>
  );
}
const StyledPost = styled.div`
  width: 100vw;
  min-height: 100vh;
  transform: translateY(-500px);
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  background: rgba(248, 249, 250, 0.7);
  overflow: hidden;
`;
export default Post;

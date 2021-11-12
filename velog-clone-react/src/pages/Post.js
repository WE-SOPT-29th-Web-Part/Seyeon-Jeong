import React, { useState } from "react";
import styled from "styled-components";
import Exit from "../components/post/Exit";
import StoryInput from "../components/post/StoryInput";
import TagInput from "../components/post/TagInput";
import TitleInput from "../components/post/TitleInput";
function Post() {
  const [titleInput, setTitleInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [storyInput, setStoryInput] = useState("");
  return (
    <StyledPost>
      <TitleInput />
      <TagInput tagInput={tagInput} setTagInput={setTagInput} />
      <StoryInput />
      <Exit />
    </StyledPost>
  );
}
const StyledPost = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  background: rgba(248, 249, 250, 0.7);
  overflow-x: hidden;
`;
export default Post;

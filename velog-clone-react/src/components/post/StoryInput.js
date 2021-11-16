import React from "react";
import styled from "styled-components";
function StoryInput({ storyInput, setStoryInput }) {
  const handleStory = (e) => setStoryInput(e.target.value);
  return (
    <StyledStoryInput>
      <textarea
        placeholder="당신의 이야기를 적어보세요..."
        value={storyInput || ""}
        onChange={handleStory}
      />
    </StyledStoryInput>
  );
}
const StyledStoryInput = styled.div`
  flex-grow: 1;
  textarea {
    width: 100%;
    height: 90%;
    padding: 20px 0;
    border: none;
    outline: none;
    background: transparent;
    resize: none;
  }
`;
export default StoryInput;

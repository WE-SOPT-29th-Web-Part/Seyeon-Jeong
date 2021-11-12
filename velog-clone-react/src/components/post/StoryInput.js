import React from "react";
import styled from "styled-components";
function StoryInput() {
  return (
    <StyledStoryInput>
      <textarea placeholder="당신의 이야기를 적어보세요..." />
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

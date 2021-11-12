import React, { useState } from "react";
import styled from "styled-components";
function TagInput({ tagInput, setTagInput }) {
  const [tags, setTags] = useState([]);
  const handleTag = (e) => setTagInput(e.target.value);
  const addTag = (e) => {
    if (e.key === "Enter") {
      const newTags = [...tags];
      newTags.push(tagInput);
      setTags(newTags);
      setTagInput("");
    }
  };
  const renderTags = () => {
    return tags.map((tag) => <StyledTag>{tag}</StyledTag>);
  };
  return (
    <StyledTagInput>
      {renderTags()}
      <input
        value={tagInput || ""}
        onChange={handleTag}
        placeholder="태그를 입력하세요."
        onKeyPress={addTag}
      />
    </StyledTagInput>
  );
}

const StyledTagInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  input {
    width: 100%;
    height: 1vw;
    padding: 20px 0;
    border: none;
    outline: none;
    background: transparent;
  }
`;
const StyledTag = styled.div`
  display: inline-block;
  height: 32px;
  padding: 0 20px;
  line-height: 32px;
  background: rgb(241, 243, 245);
  border-radius: 15px;
  color: mediumseagreen;
  margin-right: 5px;
  white-space: nowrap;
`;
export default TagInput;

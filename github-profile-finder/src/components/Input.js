import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
function Input({ set, card }) {
  const [userId, setUserId] = useState("");
  async function getUser(e) {
    e.preventDefault();
    await axios
      .get(`https://api.github.com/users/${userId}`)
      .then((res) => {
        set(res.data);
        card(true);
      })
      .catch(() => set("error"));
    setUserId("");
  }
  const onChange = (e) => setUserId(e.target.value);
  return (
    <InputContainer>
      <form onSubmit={getUser}>
        <input
          placeholder="GitHub 프로필을 검색해보세요."
          value={userId || ""}
          onChange={onChange}
        ></input>
      </form>
    </InputContainer>
  );
}
const InputContainer = styled.div`
  input {
    width: 320px;
    height: 57px;
    border: 8px solid rgba(105, 105, 105, 0.5);
    border-radius: 20px;
    background-color: rgb(36, 39, 43);
    color: rgb(229, 230, 231);
    outline: none;
    padding 1rem;
    
  }
`;
export default Input;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
function Input({ setUserInfo, setCardOpen , loading}) {
  const [userId, setUserId] = useState("");
  async function getUser(e) {
    e.preventDefault();
    loading(true);
    try{
      const {data} = await axios.get(`https://api.github.com/users/${userId}`);
      setUserInfo(data);
      setCardOpen(true);
    }catch(err){
      setUserInfo('error')
      setCardOpen(false);
    }
    setUserId("");
    loading(false);
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
    padding: 1rem;
    
  }
`;
export default Input;

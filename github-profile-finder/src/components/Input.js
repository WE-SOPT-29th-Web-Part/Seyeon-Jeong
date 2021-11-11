import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import History from "./History";
function Input({ setUserInfo, setCardOpen , loading}) {
  const [userId, setUserId] = useState("");
  const [history, setHistory] = useState([]);

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
    createHistory(userId);
    loading(false);
  }

  function createHistory(userId) {
    let newHistory = [...history];
    if(newHistory.length < 3) newHistory.push(userId);
    else newHistory = newHistory.splice(1).concat(userId);
  
    localStorage.setItem('history',newHistory);
    setHistory(newHistory);
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
      <History history={history} setHistory={setHistory}/>
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

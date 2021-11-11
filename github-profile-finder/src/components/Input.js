import React, { useState} from "react";
import styled from "styled-components";
import axios from "axios";
import History from "./History";
function Input({ setUserInfo, setCardOpen , loading}) {
  const [userId, setUserId] = useState("");
  const [history, setHistory] = useState(
    localStorage.getItem('history') ? 
    localStorage.getItem('history').split(',') : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(userId);
  }
  async function getUser(userId) {
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
  function createHistory(input) {
    let newHistory = [...history];

    if(!newHistory.includes(input)){
      if(newHistory.length >= 3) newHistory.pop();
      newHistory.unshift(input);
    }
  
    localStorage.setItem('history',newHistory);
    setHistory(newHistory);
  }
  const onChange = (e) => setUserId(e.target.value);
  return (
    <InputContainer>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input
          placeholder="GitHub 프로필을 검색해보세요."
          value={userId || ""}
          onChange={onChange}
        ></input>
      </form>
      <History history={history} setHistory={setHistory} getUser={getUser}/>
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

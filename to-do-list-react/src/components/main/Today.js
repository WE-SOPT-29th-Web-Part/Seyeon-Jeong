import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
function Today({ mode }) {
  const [todayLists, setTodayLists] = useState([]);
  const [newTodo, setNewToDo] = useState();
  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      const newLists = [...todayLists, { id: v4(), newTodo }];
      setTodayLists(newLists);
      setNewToDo("");
    }
  };
  const handleDelete = (id) => {
    const newLists = todayLists.filter((list) => list.id !== id);
    setTodayLists(newLists);
  };
  return (
    <StyledToday mode={mode}>
      <div className="title">오늘 할 일</div>
      <ol className="lists-con">
        {todayLists.map((list) => (
          <li className="list" key={list.id}>
            {list.newTodo}
            <span className="delete" onClick={() => handleDelete(list.id)}>
              삭제
            </span>
          </li>
        ))}
      </ol>
      <input
        value={newTodo || ""}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </StyledToday>
  );
}
const StyledToday = styled.div`
  width: ${({ mode }) => (mode === "today" ? "100%" : "50%")};
  display: ${({ mode }) => (mode === "tomorrow" ? "none" : "flex")};
  transition: all 1s;
  background-color: rgba(240, 237, 255, 0.5);
  border-radius: 10px;
  padding: 30px;
  margin: 30px;
  box-sizing: border-box;
  flex-direction: column;

  .title {
    font-size: 1.2rem;
    color: gray;
    font-weight: bold;
    text-align: center;
  }
  .lists-con {
    list-style: none;
    padding: 0;
  }
  .list {
    display: flex;
    align-items: center;
    height: 25px;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    padding: 3px;
  }
  .delete {
    padding: 3px;
    color: gray;
    margin-left: auto;
    cursor: pointer;
  }
  .delete:hover {
    font-weight: bold;
  }
  input {
    margin-top: auto;
    border: none;
    outline: none;
    height: 20px;
    border-radius: 5px;
    padding: 5px;
    color: white;
    background-color: rgba(129, 107, 255, 0.5);
  }
`;
export default Today;

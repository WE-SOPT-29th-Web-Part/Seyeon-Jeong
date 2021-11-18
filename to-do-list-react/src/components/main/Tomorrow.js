import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
function Tomorrow({ mode }) {
  const [tomorrowLists, setTomorrowLists] = useState([]);
  const [newToDo, setNewToDo] = useState();
  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      const newLists = [...tomorrowLists, { id: v4(), newToDo }];
      setTomorrowLists(newLists);
      setNewToDo("");
    }
  };
  const handleDelete = (id) => {
    const newLists = tomorrowLists.filter((list) => list.id !== id);
    setTomorrowLists(newLists);
  };
  return (
    <StyledTomorrow mode={mode}>
      <div className="title">내일 할 일</div>
      <ol className="lists-con">
        {tomorrowLists.map((list) => (
          <li className="list" key={list.id}>
            {list.newToDo}
            <span className="delete" onClick={() => handleDelete(list.id)}>
              삭제
            </span>
          </li>
        ))}
      </ol>
      <input
        value={newToDo || ""}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </StyledTomorrow>
  );
}
const StyledTomorrow = styled.div`
  width: ${({ mode }) => (mode === "tomorrow" ? "100%" : "50%")};
  display: ${({ mode }) => (mode === "today" ? "none" : "flex")};
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
export default Tomorrow;

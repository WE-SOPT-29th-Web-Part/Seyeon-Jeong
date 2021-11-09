import React from "react";
import styled from "styled-components";
function Profile({ userInfo, card }) {
  return (
    <Card>
      <button className="close" onClick={() => card(false)}>
        닫기
      </button>
      <img className="card-image" src={userInfo?.avatar_url}></img>
      <div className="user-id">{userInfo?.login}</div>
      <a className="visit" href={userInfo?.html_url} target="_blank">
        Visit Github
      </a>
      <div className="github-info-con">
        <div>
          Followers
          <br />
          {userInfo?.followers}
        </div>
        <div>
          Following <br />
          {userInfo?.following}
        </div>
        <div>
          Repos <br />
          {userInfo?.public_repos}
        </div>
      </div>
    </Card>
  );
}
const Card = styled.div`
  width: 390px;
  height: 450px;
  background-color: rgb(44, 48, 53);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1.5rem;
  border-radius: 10px;
  .close {
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: rgb(36, 39, 43);
    color: white;
    outline: none;
    position: absolute;
    right: 10px;
    top 10px;
    cursor: pointer;
  }
  .card-image{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 30px;
  }
  .user-id{color: whitesmoke; margin: 30px;}
  .visit{
    color: mediumspringgreen;
    text-decoration: none;
    // margin: 15px;
    border: 1px solid mediumspringgreen;
    padding: 1rem;
    border-radius: 10px;
  }
  .visit:hover{
    background-color: mediumspringgreen;
    color: black;
  }
  .github-info-con{
    width : 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin-top: auto; 

    div:nth-child(1) {border-bottom-left-radius: 10px;}
    div:nth-child(3) {border-bottom-right-radius: 10px;}
  }
  .github-info-con div{
    width: 100px;
    background-color: rgb(36, 39, 43);
    color: whitesmoke;
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
  }
`;
export default Profile;

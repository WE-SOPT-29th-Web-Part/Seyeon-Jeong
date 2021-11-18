import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillMail, AiFillHome } from "react-icons/ai";
import profileImage from "../../assets/images/dog.jpg";
function Profile() {
  return (
    <StyledProfile>
      <div className="profile-main">
        <img className="profile-image" src={profileImage} />
        <div className="profile-description">
          <div className="name">정세연</div>
          <div className="description">과제 어렵다..</div>
        </div>
      </div>
      <div className="profile-link">
        <AiFillGithub />
        <AiFillMail />
        <AiFillHome />
      </div>
    </StyledProfile>
  );
}
const StyledProfile = styled.div`
  width: 100%;
  .profile-main {
    display: flex;
    align-items: center;
    padding: 30px 0;
    margin-bottom: 20px;
    border-bottom: 2px solid whitesmoke;
  }
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .profile-description {
    margin-left: 10px;
  }
  .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .profile-link svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    color: lightgray;
  }
`;
export default Profile;

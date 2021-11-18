import React from 'react'
import styled from 'styled-components';
function Nav({setMode}) {
    const handleClick = (mode) =>{
        switch (mode) {
            case 'today':
            case 'tomorrow':
            case 'all':
                setMode(mode);
                break;
            default:
                break;
        }
    }
    return (
        <StyledNav>
            <div onClick={()=>handleClick('today')}>오늘만 보기</div>
            <div onClick={()=>handleClick('tomorrow')}>내일만 보기</div>
            <div onClick={()=>handleClick('all')}>함께 보기</div>
        </StyledNav>
    )
}
const StyledNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div{
      margin: 0 15px;
      color: gray;
      font-weight: bold;
      cursor: pointer;
  }
  div:hover{
    color: black;
  }
`;
export default Nav

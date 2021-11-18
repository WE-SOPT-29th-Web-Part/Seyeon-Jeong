import React from 'react'
import styled from 'styled-components';
function Header() {

    return (
        <StyledHeader>
            To Do List
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
  width: 100%;
  font-size: 2rem;
  height: 70px;
  text-align: center;
  line-height: 70px;
  color: rgb(129, 107, 255);;
  font-weight: bold;
`;
export default Header

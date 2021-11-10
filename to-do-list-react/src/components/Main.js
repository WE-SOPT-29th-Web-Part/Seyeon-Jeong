import React from 'react'
import styled from 'styled-components';
import Today from './main/Today';
import Tomorrow from './main/Tomorrow';
function Main({mode}) {
    return (
        <StyledMain>
            <Today mode={mode}/>
            <Tomorrow mode={mode}/>
        </StyledMain>
    )
}
const StyledMain = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  margin-top: 10px;
`;
export default Main

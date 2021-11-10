import React from 'react'
import styled from 'styled-components';
function Loading() {
    return (
        <StyledLoading/>
    )
}
const StyledLoading = styled.div`
  width: 50px;
  height: 50px;
  border: 7px solid transparent;
  border-top-color: whitesmoke;
  border-radius: 50%;
  margin-top: 30px;
  animation: loading 800ms linear 0s infinite normal none; 
 
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loading

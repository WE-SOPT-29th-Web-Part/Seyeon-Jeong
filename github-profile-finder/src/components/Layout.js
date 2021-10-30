import React from "react";
import styled from "styled-components";
function Layout({ children }) {
  return <Container>{children}</Container>;
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(27, 29, 33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    box-sizing: border-box;
  }
  header {
    font-size: 1.5rem;
    fonr-wight: bold;
    color: white;
    margin-bottom: 1.5rem;
  }
`;
export default Layout;

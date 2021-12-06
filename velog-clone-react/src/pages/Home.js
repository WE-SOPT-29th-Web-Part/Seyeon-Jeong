import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import styled from "styled-components";
import Profile from "../components/common/Profile";
import Articles from "../components/home/Articles";
import Series from "../components/home/Series";
import Nav from "../components/common/Nav";
function Home() {
  return (
    <StyledHome>
      <Header />
      <Profile />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      {/* <Outlet /> */}
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 5vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: rgb(248, 249, 250);
`;
export default Home;

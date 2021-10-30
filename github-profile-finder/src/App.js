import "./App.css";
import React, { useState } from "react";
import Layout from "./components/Layout";
import Input from "./components/Input";
import Profile from "./components/Profile";
function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const render = () => {
    if (!userInfo) return;
    return userInfo === "error" ? (
      <div style={{ color: "whitesmoke", margin: "1.5rem" }}>
        사용자가 존재하지 않습니다.
      </div>
    ) : (
      cardOpen && <Profile userInfo={userInfo} card={setCardOpen} />
    );
  };
  return (
    <>
      <Layout>
        <header>GitHub Profile Finder</header>
        <Input set={setUserInfo} card={setCardOpen} />
        {render()}
      </Layout>
    </>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import Layout from "./components/Layout";
import Input from "./components/Input";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const render = () => {
    if(isLoading) return <Loading/>
    if(userInfo === 'error') return ( 
      <div style={{ color: "whitesmoke", margin: "1.5rem" }}>
        사용자가 존재하지 않습니다.
      </div>
    )
    return cardOpen && <Profile userInfo={userInfo} setCardOpen={setCardOpen} />
  };
  return (
    <>
      <Layout>
        <header>GitHub Profile Finder</header>
        <Input setUserInfo={setUserInfo} setCardOpen={setCardOpen} loading={setIsLoading}/>
        {render()}
      </Layout>
    </>
  );
}

export default App;

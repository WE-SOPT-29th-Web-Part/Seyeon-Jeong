import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  const [mode, setMode] = useState('all');
  return (
    <>
      <Layout>
        <Header/>
        <Nav setMode={setMode}/>
        <Main mode={mode}/>
        <Footer/>
      </Layout>
    </>
  );
}

export default App;

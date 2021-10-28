import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Result from "./components/Result";
function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  return (
    <div className="wrapper">
      <Layout>
        <Header />
        <Input
          year={year}
          month={month}
          date={date}
          setYear={setYear}
          setMonth={setMonth}
          setDate={setDate}
        />
        <div className="label">D-Day 계산기</div>
        <Result year={year} month={month} date={date} />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

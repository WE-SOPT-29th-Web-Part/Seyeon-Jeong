import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Series from "./components/home/Series";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/series" element={<Series />} />
          </Route>
          <Route path="/post" element={<Post />} />
          <Route path="/*" element={<div>error</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

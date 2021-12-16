import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Series from "./components/home/Series";
import Article from "./pages/Article";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/series" element={<Series />} />
          </Route>
          <Route path="/post" element={<Post />} />
          <Route path="/post/update/:id" element={<Post />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/*" element={<div>error</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

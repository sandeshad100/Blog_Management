import Home from "./pages/user/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import BlogView from "./pages/user/BlogView";
import Layout from "./components/user/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="blogview" element={<BlogView />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

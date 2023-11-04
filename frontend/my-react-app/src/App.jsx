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
            <Route index path="" element={<Home />} />
            <Route path="blogview" element={<BlogView />}></Route>
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

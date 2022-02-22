import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { getUser } from "./actions/user.actions";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token != null) {
      dispatch(getUser(token));
    }
  }, [token, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

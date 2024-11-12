import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/AuthSlice";
import { RootState } from "./store/store";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/get-user`,
        { withCredentials: true }
      );
      if (!res) {
        navigate("/login");
      }
      dispatch(login(res.data.user));
    })();
  });
  const status = useSelector((state: RootState) => state.auth.status);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout>{status ? <Home /> : <Login />}</Layout>}
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
    </Routes>
  );
}

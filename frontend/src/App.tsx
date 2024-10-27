import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";

export default function App() {
  const status = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout status={status}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout status={status}>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout status={status}>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

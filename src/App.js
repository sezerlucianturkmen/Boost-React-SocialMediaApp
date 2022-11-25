import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";

function App() {
  const isLogin = useSelector((state) => state.auth.isAuthanticated);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <HomePage></HomePage> : <LoginPage></LoginPage>}
          ></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const islogin = useSelector(state=> state.auth.isAuthenticated)
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
      <Route path="/" element={islogin ? <HomePage /> : <LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
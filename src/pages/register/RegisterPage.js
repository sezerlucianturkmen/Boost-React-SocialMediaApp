import { Alert } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  fecthRegister,
  setAllertMsssage,
  setAuth,
  setIsSave,
} from "../../store/features/AuthSlice";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isValid, setIsVAlid] = useState(false);
  const isSave = useSelector((state) => state.auth.isSave);
  const alertMessage = useSelector((state) => state.auth.alertMessage);
  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();

  const buttonClasname = !isValid
    ? "loginButton bg-purple-200"
    : "loginButton bg-purple-800";

  const dispatch = useDispatch();
  const register = async (e) => {
    e.preventDefault();
    const auth = {
      username,
      email,
      password,
    };

    dispatch(setAuth(auth));

    if (isValid) {
      dispatch(fecthRegister(auth));
    }

    setTimeout(() => {
      dispatch(setIsSave());
    }, 3000);
  };

  const navigateLogin = () => {
    if (isSave) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(setIsSave());
      }, 3000);
    }
  };

  useEffect(() => {
    navigateLogin();
  }, [isSave]);

  useEffect(() => {
    checkPassword();
  }, [rePassword, password]);

  const checkPassword = async (e) => {
    if (password === rePassword) {
      setIsVAlid(true);
      dispatch(setAllertMsssage(""));
    } else {
      setIsVAlid(false);
      dispatch(setAllertMsssage("Şifreler Uyuşmuyor"));
    }
    return isValid;
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo text-purple-300">Social Media</h3>
          <span className="loginDesc text-white">
            Sosyal Medyada arkadaşlarınızla ve çevrenizdeki dünyayla bağlantı
            kurun.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type={"text"}
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="loginInput"
            />
            <input
              type={"email"}
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"
            />
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
              name="password"
              value={password}
            />
            <input
              placeholder="Password Again"
              onChange={(e) => setRePassword(e.target.value)}
              className="loginInput"
              name="rePassword"
              value={rePassword}
            />

            {isSave ? (
              <Alert variant="filled" severity="success">
                {alertMessage}
              </Alert>
            ) : !isValid || alertMessage.length > 0 ? (
              <Alert variant="filled" severity="error">
                {alertMessage}
              </Alert>
            ) : (
              ""
            )}

            <button
              disabled={!isValid}
              onClick={register}
              className={buttonClasname}
            >
              Kayıt ol
            </button>

            <Link to="/">
              <button
                type={"submit"}
                className="loginRegisterButton bg-lime-600"
              >
                Hesabınla Giriş Yap
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

import { Alert } from "@mui/material";
import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { fetchRegister } from "../../store/features/AuthSlice";

function RegisterPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [alertMessage, setAlertMessage]= useState("");
  const isSave = useSelector((state) => state.auth.isSave);

  const dispatch = useDispatch();
  const register = async (e) => {
    e.preventDefault();

    const auth = {
      username,
      email,
      password,
    };
    console.log(checkPassword());
    const response = await checkPassword();

    if (response) {
      dispatch(fetchRegister(auth));
    }
  };

  const checkPassword = async () => {
    console.log(password);
    console.log(rePassword);
    if (password === rePassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
      dispatch(setAlertMessage("Şifreler Uyuşmuyor"));
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
            <input placeholder="Username" onChange={(e)=> setUsername(e.target.value)} className="loginInput" />
            <input placeholder="Email"  onChange={(e)=> setEmail(e.target.value)} className="loginInput" />
            <input placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}  className="loginInput" />
            <input placeholder="Password Again"  onChange={(e)=> setrePassword(e.target.value)} className="loginInput" />
                   
            {isValid && isSave ? (
              <Alert variant="filled" severity="success">
                {alertMessage}
              </Alert>
            ) : (
              <Alert variant="filled" severity="error">
                {alertMessage}
              </Alert>
            )}           

            <button className="loginButton bg-purple-800" onClick={register} >Kayıt ol</button>            
            <Link to="/">
            <button className="loginRegisterButton bg-lime-600" >
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
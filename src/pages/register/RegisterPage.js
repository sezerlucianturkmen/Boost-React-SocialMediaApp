import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { fetchRegister } from "../../store/features/authSlice";

function RegisterPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  const dispatch = useDispatch();
  const register = async () => {
    const auth = {
      username,
      email,
      password,
    };
    dispatch(fetchRegister(auth));
  };

  const onChangeUsername = (e) => {};
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
            <button className="loginButton bg-purple-800" onClick={register} >Kayıt ol</button>
            <button className="loginRegisterButton bg-lime-600" >
              Hesabınla Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
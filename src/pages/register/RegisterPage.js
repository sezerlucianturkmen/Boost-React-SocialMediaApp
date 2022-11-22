import React, { useState } from "react";
import authService from "../../config/AuthService"

function RegisterPage() {

  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[rePassword,setRePassword]=useState("");

  const register = async () => {
    const auth = {
      username,
      email,
      password,
    };

    const response = await fetch(authService.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log(response);
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
            <input placeholder="Password Again"  onChange={(e)=> setRePassword(e.target.value)} className="loginInput" />
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
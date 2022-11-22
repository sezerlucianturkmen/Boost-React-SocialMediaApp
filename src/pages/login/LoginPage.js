import React from "react";

function LoginPage() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo text-purple-200">Social Media </h3>
          <span className="loginDesc text-white">
            Sosyal Medyada arkadaşlarınızla ve çevrenizdeki dünyayla bağlantı
            kurun.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox p-5 ">
            <input
              type="text"
              placeholder="username"
              className="loginInput"
              name="username"
            />
            <input
              type={"password"}
              placeholder="Password"
              className="loginInput"
              name="password"
            />
            <button className="loginButton bg-purple-600">Giriş Yap</button>
            <span className="loginForgot">Şifremi Unuttum?</span>
            <button className="loginRegisterButton  bg-lime-400">Üye Ol</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
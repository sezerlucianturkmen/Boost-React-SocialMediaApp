import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import {fetchLogin} from '../../store/features/authSlice';
function LoginPage() {
  const dispatch = useDispatch();
  const [auth,setAuth] = useState({
    username: '',
    password: '',    
  });

  const onChangeAuth = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
    console.log(auth);
  };

  const login = ()=>{    
    dispatch(fetchLogin(auth))
    };

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
              onChange={onChangeAuth}
            />
            <input
              type={"password"}
              placeholder="Password"
              className="loginInput"
              name="password"
              onChange={onChangeAuth}
            />
            <button className="loginButton bg-purple-600" onClick={login}>Giriş Yap</button>
            <span className="loginForgot">Şifremi Unuttum?</span>
            <button className="loginRegisterButton  bg-lime-400">Üye Ol</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
import React from "react";
import "./Login.css";
import logo from "../../assets/favicon-32x32.png";
import bgimg from "../../assets/Screenshot_1.png";
import { useNavigate } from "react-router-dom";
import Chat from "../important/Chat";

const Login = () => {

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault()
    navigate('/twostepverify')
  }

  return (
    <>
    <Chat/>
      <div className="loginpage">
        <div className="nav">
          <img src={logo} alt="" />
        </div>
      
      <div className="loginbody">
        <div className="leftlogin">
          <img src={bgimg} alt="" />
        </div>
        <form className="rightlogin" onSubmit={handlesubmit}>
          <div className="heading">
            <h1>Log in to Uphold</h1>
            <p>
              Not a member? <span>Sign up now</span>
            </p>
          </div>
          <div className="body">
            <input type="text" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <p>Forgot password?</p>
          </div>
          <button>Next</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;

import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialApp</h3>
                    <span className="loginDesc">Connect With friends and world around you on SocialApp</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder = 'Email' className="loginInput"/>
                        <input type="password" placeholder = 'Password' className="loginInput"/>
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forget Password ?</span>
                        <button className="loginRegister">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

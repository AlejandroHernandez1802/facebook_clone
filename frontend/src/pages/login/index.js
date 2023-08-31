//Styles import
import "../../styles/pages/login.css";

//Components imports
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
import LoginFooter from "../../components/login/LoginFooter";

function Login() {
	return (
		<div className="login">
			<div className="login_wrapper">
				<LoginForm />
				<RegisterForm />
				<LoginFooter />
			</div>
		</div>
	);
}

export default Login;

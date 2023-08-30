//React imports
import { useState } from "react";

//Libreries imports
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

//Styles import
import "../../styles/pages/login.css";

//Components imports
import LoginInput from "../../components/inputs/loginInputs";

//Constants declaration
const loginInfo = {
	email: "",
	password: "",
};

function Login() {
	//States declaration
	const [login, setLogin] = useState(loginInfo);
	const { email, password } = login;

	//Validations
	const loginValidation = Yup.object({
		email: Yup.string()
			.required("Email address is required")
			.email("Must be a valid email")
			.max(50),
		password: Yup.string().required("Password is required"),
	});

	//Methods declaration
	const handleLoginDataChange = (e) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};

	return (
		<div className="login">
			<div className="login_wrapper">
				<div className="login_wrap">
					<div className="login_header">
						<img src="../../icons/facebook.svg" alt="Facebook logo" />
						<span>
							Facebook helps you connect and share with people in your life
						</span>
					</div>
					<div className="login_body">
						<div className="login_body_wrap">
							<Formik
								enableReinitialize
								initialValues={{ email, password }}
								validationSchema={loginValidation}>
								{(formik) => (
									<Form>
										<LoginInput
											type="text"
											name="email"
											placeholder="Email"
											onChange={handleLoginDataChange}
										/>
										<LoginInput
											type="password"
											name="password"
											placeholder="Password"
											onChange={handleLoginDataChange}
											bottom
										/>
										<button type="submit" className="button blue_button">
											Log in
										</button>
									</Form>
								)}
							</Formik>
							<Link to="/forgot" className="forgot_password">
								Forgotten password?
							</Link>
							<div className="sign_up_splitter"></div>
							<button className="button green_button">Create account</button>
						</div>

						<Link to="/" className="sign_extra">
							<b>Create page</b>, for a clebrity, brand or business
						</Link>
					</div>
				</div>
				<div className="register"></div>
				<footer className="login_footer">
					<div className="login_footer_wrap">
						<Link to="/">English(UK)</Link>
						<Link to="/">Français(FR)</Link>
						<Link to="/">العربية</Link>
						<Link to="/">ⵜⴰⵎⴰⵣⵉⵖⵜ</Link>
						<Link to="/">Español (España)</Link>
						<Link to="/">italiano</Link>
						<Link to="/">Deutsch</Link>
						<Link to="/">Português (Brasil)</Link>
						<Link to="/">हिन्दी</Link>
						<Link to="/">中文(简体)</Link>
						<Link to="/">日本語</Link>
						<Link to="/" className="footer_square">
							<i className="plus_icon"></i>
						</Link>
					</div>
					<div className="footer_splitter"></div>
					<div className="login_footer_wrap">
						<Link to="/">Sign Up</Link>
						<Link to="/">Log in</Link>
						<Link to="/">Messenger</Link>
						<Link to="/">Facebook Lite</Link>
						<Link to="/">Watch</Link>
						<Link to="/">Places</Link>
						<Link to="/">Games</Link>
						<Link to="/">Marketplace</Link>
						<Link to="/">Facebook Pay</Link>
						<Link to="/">Oculus</Link>
						<Link to="/">Portal</Link>
						<Link to="/">Instagram</Link>
						<Link to="/">Bulletin</Link>
						<Link to="/">Local</Link>
						<Link to="/">Fundraisers</Link>
						<Link to="/">Services</Link>
						<Link to="/">Voting Information Centre</Link>
						<Link to="/">Groups</Link>
						<Link to="/">About</Link>
						<Link to="/">Create ad</Link>
						<Link to="/">Create Page</Link>
						<Link to="/">Developers</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Privacy</Link>
						<Link to="/">Cookies</Link>
						<Link to="/">
							AdChoices
							<i className="adChoices_icon"></i>
						</Link>
						<Link to="/">Terms</Link>
						<Link to="/">Help</Link>
					</div>
					<div className="login_footer_wrap">
						<Link to="/" style={{ fontSize: "12px", marginTop: "10px" }}>
							Meta © 2022
						</Link>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Login;

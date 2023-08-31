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

function LoginForm() {
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
	);
}

export default LoginForm;

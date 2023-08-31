//Style import
import "../../styles/components/login/RegisterForm.css";

//React imports
import { useState } from "react";

//Components imports
import Modal from "../shared/Modal";
import RegisterInput from "../inputs/registerInputs";

//Libraries imports
import { Form, Formik } from "formik";
import * as Yup from "yup";

function RegisterForm() {
	//Main data declaration
	const registerInfo = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		birthyear: new Date().getFullYear(),
		birthmonth: new Date().getMonth() + 1,
		birthday: new Date().getDate(),
		gender: "",
	};

	//States declaration
	const [registerData, setRegisterData] = useState(registerInfo);
	const {
		firstname,
		lastname,
		email,
		password,
		birthyear,
		birthmonth,
		birthday,
		gender,
	} = registerData;

	//Validations
	const registerValidations = Yup.object({
		firstname: Yup.string()
			.required("First name is required")
			.matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed"),
		lastname: Yup.string()
			.required("Last name is required")
			.matches(
				/^[aA-zZ\s]+$/,
				"Numbers and special characters are not allowed"
			),
		email: Yup.string()
			.required("Email is required")
			.email("Must be a valid email"),
		password: Yup.string().required().min(8).max(20),
		birthyear: Yup.string().required("Birth year is required"),
		birthmonth: Yup.string().required("Birth year is required"),
		birthday: Yup.string().required("Birth year is required"),
		gender: Yup.string().required(),
	});

	//Methods declaration
	const handleRegisterDataChange = (e) => {
		const { name, value } = e.target;
		setRegisterData({ ...registerData, [name]: value });
	};

	//Another constants definition
	const years = Array.from(
		new Array(108),
		(val, index) => new Date().getFullYear() - index
	);
	const months = Array.from(new Array(12), (val, index) => index + 1);
	const getDays = () => {
		return new Date(birthyear, birthmonth, 0).getDate();
	};
	const days = Array.from(new Array(getDays()), (val, index) => index + 1);

	return (
		<Modal>
			<div className="register">
				<div className="register_header">
					<i className="exit_icon"></i>
					<span>Sign up</span>
					<span>It's quick and easy</span>
				</div>
				<div className="register_body">
					<Formik
						enableReinitialize
						initialValues={{ ...registerData }}
						validationSchema={registerValidations}>
						{(formik) => (
							<Form className="register_form">
								<div className="reg_line">
									<RegisterInput
										type="text"
										placeholder="First name"
										name="firstname"
										onChange={handleRegisterDataChange}
									/>
									<RegisterInput
										type="text"
										placeholder="Last name"
										name="lastname"
										onChange={handleRegisterDataChange}
									/>
								</div>
								<div className="reg_line">
									<RegisterInput
										type="text"
										placeholder="Mobile number or email address"
										name="email"
										onChange={handleRegisterDataChange}
									/>
								</div>
								<div className="reg_line">
									<RegisterInput
										type="password"
										placeholder="Password"
										name="password"
										onChange={handleRegisterDataChange}
									/>
								</div>
								<div className="reg_column">
									<div className="reg_line_header">
										Date of birth <i className="info_icon"></i>
									</div>
									<div className="reg_grid">
										<select
											name="birthday"
											value={birthday}
											onChange={handleRegisterDataChange}>
											{days.map((day, index) => {
												return (
													<option value={day} key={index}>
														{day}
													</option>
												);
											})}
										</select>
										<select
											name="birthmonth"
											value={birthmonth}
											onChange={handleRegisterDataChange}>
											{months.map((month, index) => {
												return (
													<option value={month} key={index}>
														{month}
													</option>
												);
											})}
										</select>
										<select
											name="birthyear"
											value={birthyear}
											onChange={handleRegisterDataChange}>
											{years.map((year, index) => {
												return (
													<option value={year} key={index}>
														{year}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<div className="reg_column">
									<div className="reg_line_header">
										Gender <i className="info_icon"></i>
									</div>
									<div className="reg_grid">
										<label htmlFor="male">
											Male{" "}
											<input
												name="gender"
												type="radio"
												id="male"
												value="male"
												onChange={handleRegisterDataChange}
											/>
										</label>

										<label htmlFor="female">
											Female
											<input
												name="gender"
												type="radio"
												id="female"
												value="female"
												onChange={handleRegisterDataChange}
											/>
										</label>

										<label htmlFor="custom">
											Custom
											<input
												name="gender"
												type="radio"
												id="custom"
												value="custom"
												onChange={handleRegisterDataChange}
											/>
										</label>
									</div>
								</div>
								<div className="reg_infos">
									By clicking this button you're agree with our data policy
								</div>
								<div className="reg_button_wrapper">
									<button className="button green_button">Sign up</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</Modal>
	);
}

export default RegisterForm;

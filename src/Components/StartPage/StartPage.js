import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StartPage({
	component: Component,
	heading,
	buttonText,
	question,
	link,
	linkText,
	useInput,
	handleRegister,
	handleLogin,
	setRegisterCredentials,
	buttonErrorText,
	isResOk,
	location,
	isLoginSubmiting,
	isRegistrationSubmiting,
}) {
	const [isFormValid, setIsFormValid] = useState(false);
	const nameValueRegister = useInput('', {
		isEmpty: true,
		minLength: 2,
		maxLength: 30,
	});
	const loginValueRegister = useInput('', { isEmpty: true });
	const passwordValueRegister = useInput('', { isEmpty: true });
	const roleValueRegister = useInput('', { isEmpty: true });

	const loginValueLogin = useInput('', { isEmpty: true });
	const passwordValueLogin = useInput('', { isEmpty: true });

	function handleValidForm() {
		setIsFormValid(true);
	}

	function handleInvalidForm() {
		setIsFormValid(false);
	}

	const isDisabled =
		isLoginSubmiting || isRegistrationSubmiting
			? true
			: isFormValid
			? false
			: true;

	function submitForm(e) {
		e.preventDefault();
		if (location.pathname === '/signup') {
			handleRegister(
				loginValueRegister.value,
				nameValueRegister.value,
				passwordValueRegister.value,
				roleValueRegister.value
			);
		} else if (location.pathname === '/signin') {
			handleLogin(loginValueLogin.value, passwordValueLogin.value);
		}
	}

	return (
		<section className="start-page">
			<div className="start-page__main">
				<h3 className="start-page__heading">{heading}</h3>
				<form className="start-page__form" onSubmit={submitForm}>
					<fieldset className="start-page__form-container">
						<Component
							useInput={useInput}
							handleValidForm={handleValidForm}
							handleInvalidForm={handleInvalidForm}
							handleRegister={handleRegister}
							setRegisterCredentials={setRegisterCredentials}
							nameValueRegister={nameValueRegister}
							loginValueRegister={loginValueRegister}
							passwordValueRegister={passwordValueRegister}
							roleValueRegister={roleValueRegister}
							loginValueLogin={loginValueLogin}
							passwordValueLogin={passwordValueLogin}
							isLoginSubmiting={isLoginSubmiting}
							isRegistrationSubmiting={isRegistrationSubmiting}
						/>
					</fieldset>
					<span
						className={`start-page__error ${
							isResOk ? '' : 'start-page__error_active'
						}`}
					>
						{buttonErrorText}
					</span>
					<button
						type="submit"
						className={`start-page__button overlay cursor ${
							isFormValid ? '' : 'start-page__button_disabled'
						}`}
						disabled={isDisabled}
					>
						{buttonText}
					</button>
				</form>
				<div className="start-page__change-page">
					<label className="start-page__question">{question}</label>
					<Link to={link} className="start-page__link overlay cursor">
						{linkText}
					</Link>
				</div>
			</div>
		</section>
	);
}

export default StartPage;

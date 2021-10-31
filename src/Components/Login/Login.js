import React, { useEffect } from 'react';

function Login({
	handleValidForm,
	handleInvalidForm,
	loginValueLogin,
	passwordValueLogin,
	isLoginSubmiting,
}) {
	useEffect(() => {
		loginValueLogin.isValid && passwordValueLogin.isValid
			? handleValidForm()
			: handleInvalidForm();
	}, [
		loginValueLogin.isValid,
		passwordValueLogin.isValid,
		handleValidForm,
		handleInvalidForm,
	]);

	return (
		<>
			<div className="start-page__input-container">
				<label className="input__label">Логин</label>
				<input
					name="login"
					type="login"
					disabled={isLoginSubmiting}
					className={`start-page__input ${
						(loginValueLogin.isEmpty || loginValueLogin.isEmailError) &&
						loginValueLogin.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите логин"
					value={loginValueLogin.value}
					onChange={(e) => loginValueLogin.onChange(e)}
					onBlur={(e) => loginValueLogin.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(loginValueLogin.isEmpty || loginValueLogin.isEmailError) &&
						loginValueLogin.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{loginValueLogin.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Пароль</label>
				<input
					name="password"
					type="password"
					isLoginSubmiting={isLoginSubmiting}
					className={`start-page__input ${
						passwordValueLogin.isEmpty && passwordValueLogin.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите пароль"
					value={passwordValueLogin.value}
					onChange={(e) => passwordValueLogin.onChange(e)}
					onBlur={(e) => passwordValueLogin.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						passwordValueLogin.isEmpty && passwordValueLogin.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{passwordValueLogin.errorMessage}
				</span>
			</div>
		</>
	);
}

export default Login;

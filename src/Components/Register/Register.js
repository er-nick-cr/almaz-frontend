import React, { useEffect } from 'react';

function Register({
	useInput,
	handleValidForm,
	handleInvalidForm,
	nameValueRegister,
	loginValueRegister,
	passwordValueRegister,
	isRegistrationSubmiting,
	roleValueRegister,
}) {
	useEffect(() => {
		loginValueRegister.isValid &&
		nameValueRegister.isValid &&
		passwordValueRegister.isValid
			? handleValidForm()
			: handleInvalidForm();
	}, [
		loginValueRegister.isValid,
		nameValueRegister.isValid,
		passwordValueRegister.isValid,
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
					disabled={isRegistrationSubmiting}
					required
					className={`start-page__input ${
						(loginValueRegister.isEmpty || loginValueRegister.isEmailError) &&
						loginValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите логин"
					value={loginValueRegister.value}
					onChange={(e) => loginValueRegister.onChange(e)}
					onBlur={(e) => loginValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(loginValueRegister.isEmpty || loginValueRegister.isEmailError) &&
						loginValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{loginValueRegister.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Имя</label>
				<input
					name="name"
					type="text"
					required
					disabled={isRegistrationSubmiting}
					className={`start-page__input ${
						(nameValueRegister.isEmpty ||
							nameValueRegister.minLengthError ||
							nameValueRegister.maxLengthError) &&
						nameValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите имя"
					value={nameValueRegister.value}
					onChange={(e) => nameValueRegister.onChange(e)}
					onBlur={(e) => nameValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(nameValueRegister.isEmpty ||
							nameValueRegister.minLengthError ||
							nameValueRegister.maxLengthError) &&
						nameValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{nameValueRegister.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Пароль</label>
				<input
					name="password"
					type="password"
					disabled={isRegistrationSubmiting}
					required
					className={`start-page__input ${
						passwordValueRegister.isEmpty && passwordValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите пароль"
					value={passwordValueRegister.value}
					onChange={(e) => passwordValueRegister.onChange(e)}
					onBlur={(e) => passwordValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						passwordValueRegister.isEmpty && passwordValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{passwordValueRegister.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Роль</label>
				<input
					name="role"
					type="role"
					disabled={isRegistrationSubmiting}
					required
					className={`start-page__input ${
						roleValueRegister.isEmpty && roleValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите роль"
					value={roleValueRegister.value}
					onChange={(e) => roleValueRegister.onChange(e)}
					onBlur={(e) => roleValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						roleValueRegister.isEmpty && roleValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{roleValueRegister.errorMessage}
				</span>
			</div>
		</>
	);
}

export default Register;

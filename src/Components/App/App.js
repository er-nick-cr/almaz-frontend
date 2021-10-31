import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Register from '../Register/Register';
import Login from '../Login/Login';
import StartPage from '../StartPage/StartPage';
import Navigation from '../Navigation/Navigation';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Customers from '../Customers/Customers';
import AddCustomerPopup from '../AddCustomerPopup/AddCustomerPopup';
import mainApi from '../../utils/MainApi';

function App() {
	const location = useLocation();

	const history = useHistory();

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isRegistrationSubmiting, setIsRegistrationSubmiting] = useState(false);
	const [isResOk, setResOk] = useState(true);
	const [isLoginSubmiting, setIsLoginSubmiting] = useState(false);

	function handleRegister(login, name, password, role) {
		setIsRegistrationSubmiting(true);
		mainApi
			.registerUser(login, name, password, role)
			.then((res) => {
				if (res) {
					setResOk(true);
					setIsRegistrationSubmiting(false);
					handleLogin(login, password);
				}
			})
			.catch((err) => {
				if (err) {
					setResOk(false);
				}
			});
	}

	function handleLogin(login, password) {
		setIsLoginSubmiting(true);
		mainApi
			.loginUser(login, password)
			.then((data) => {
				if (data) {
					setIsLoggedIn(true);
					setResOk(true);
					setIsLoginSubmiting(false);
					history.push('/');
				}
			})
			.catch((err) => {
				if (err) {
					setResOk(false);
				}
			});
	}

	useEffect(() => {
		mainApi
			.checkToken()
			.then(({ user }) => {
				if (user) {
					setIsLoggedIn(true);
					history.push(
						`${
							location.pathname === '/signin' || location.pathname === 'signup'
								? '/'
								: location.pathname
						}`
					);
				}
			})
			.catch((err) => console.log(err));
	}, [history]);

	return (
		<div className="App">
			<Switch>
				<Route path="/signup" exact>
					<StartPage
						heading="Добро пожаловать!"
						buttonText="Зарегистрироваться"
						component={Register}
						question="Уже зарегистрированы?"
						link="/signin"
						linkText="Войти"
						useInput={useInput}
						handleRegister={handleRegister}
						buttonErrorText="Ошибка регистрации"
						isResOk={isResOk}
						location={location}
						isRegistrationSubmiting={isRegistrationSubmiting}
					/>
				</Route>
				<Route path="/signin" exact>
					<StartPage
						heading="Рады видеть!"
						buttonText="Войти"
						component={Login}
						question="Ещё не зарегистрированы?"
						link="/signup"
						linkText="Регистрация"
						useInput={useInput}
						buttonErrorText="Ошибка входа"
						isResOk={isResOk}
						handleLogin={handleLogin}
						location={location}
						isLoginSubmiting={isLoginSubmiting}
					/>
				</Route>
				<Route
					path={[
						'/',
						'/orders',
						'/delivery',
						'/customers',
						'/debitors',
						'/settings',
						'/exit',
					]}
					exact
				>
					<ProtectedRoute
						component={Navigation}
						isLoggedIn={isLoggedIn}
					></ProtectedRoute>
					<Route path="/customers">
						<ProtectedRoute
							component={Customers}
							isLoggedIn={isLoggedIn}
						></ProtectedRoute>
						<ProtectedRoute
							component={AddCustomerPopup}
							isLoggedIn={isLoggedIn}
						></ProtectedRoute>
					</Route>
				</Route>
			</Switch>
		</div>
	);
}

export default App;

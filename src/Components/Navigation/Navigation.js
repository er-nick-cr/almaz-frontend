import React, { useState } from 'react';
import orders from '../../images/orders.svg';
import car from '../../images/car.svg';
import people from '../../images/people.svg';
import storm from '../../images/storm.svg';
import settings from '../../images/settings.svg';
import exit from '../../images/exit.svg';
import ordersBlack from '../../images/orders-black.svg';
import carBlack from '../../images/car-black.svg';
import peopleBlack from '../../images/people-black.svg';
import stormBlack from '../../images/storm-black.svg';
import settingsBlack from '../../images/settings-black.svg';
import exitBlack from '../../images/exit-black.svg';

function Navigation() {
	const [isOrdersActive, setIsOrdersActive] = useState(false);
	const [isDeliveryActive, setIsDeliveryActive] = useState(false);
	const [isClientsActive, setIsClientsActive] = useState(false);
	const [isDebitorsActive, setIsDebitorsActive] = useState(false);
	const [isSettingsActive, setIsSettingsActive] = useState(false);
	const [isExitActive, setIsExitActive] = useState(false);
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	function handleOrdersClick() {
		setIsOrdersActive(true);
		setIsDeliveryActive(false);
		setIsClientsActive(false);
		setIsDebitorsActive(false);
		setIsSettingsActive(false);
		setIsExitActive(false);
	}

	function handleDeliveryClick() {
		setIsOrdersActive(false);
		setIsDeliveryActive(true);
		setIsClientsActive(false);
		setIsDebitorsActive(false);
		setIsSettingsActive(false);
		setIsExitActive(false);
	}

	function handleClientsClick() {
		setIsOrdersActive(false);
		setIsDeliveryActive(false);
		setIsClientsActive(true);
		setIsDebitorsActive(false);
		setIsSettingsActive(false);
		setIsExitActive(false);
	}

	function handleDebitorsClick() {
		setIsOrdersActive(false);
		setIsDeliveryActive(false);
		setIsClientsActive(false);
		setIsDebitorsActive(true);
		setIsSettingsActive(false);
		setIsExitActive(false);
	}

	function handleSettingsClick() {
		setIsOrdersActive(false);
		setIsDeliveryActive(false);
		setIsClientsActive(false);
		setIsDebitorsActive(false);
		setIsSettingsActive(true);
		setIsExitActive(false);
	}

	function handleExitClick() {
		setIsOrdersActive(false);
		setIsDeliveryActive(false);
		setIsClientsActive(false);
		setIsDebitorsActive(false);
		setIsSettingsActive(false);
		setIsExitActive(true);
	}

	function handleOpenMenu() {
		setIsMenuOpened(!isMenuOpened);
	}

	return (
		<div
			className={isMenuOpened ? 'navigation navigation_opened' : 'navigation'}
		>
			<ul className="navigation__bar">
				<li
					className={
						isOrdersActive
							? 'navigation__list navigation__list_active'
							: 'navigation__list'
					}
				>
					{isOrdersActive && (
						<div>
							<b></b>
							<b></b>
						</div>
					)}
					<a
						href="#"
						onClick={handleOrdersClick}
						className={
							isOrdersActive
								? 'navigation__item navigation__item_active'
								: 'navigation__item'
						}
					>
						<span className="navigation__icon-container">
							<img
								src={isOrdersActive ? ordersBlack : orders}
								className="navigation__icon"
							/>
						</span>
						<span className="navigation__title">Заказы</span>
					</a>
				</li>
				<li
					className={
						isDeliveryActive
							? 'navigation__list navigation__list_active'
							: 'navigation__list'
					}
				>
					{isDeliveryActive && (
						<div>
							<b></b>
							<b></b>
						</div>
					)}
					<a
						href="#"
						onClick={handleDeliveryClick}
						className={
							isDeliveryActive
								? 'navigation__item navigation__item_active'
								: 'navigation__item'
						}
					>
						<span className="navigation__icon-container">
							<img
								src={isDeliveryActive ? carBlack : car}
								className="navigation__icon"
							/>
						</span>
						<span className="navigation__title">Доставка</span>
					</a>
				</li>
				<li
					className={
						isClientsActive
							? 'navigation__list navigation__list_active'
							: 'navigation__list'
					}
				>
					{isClientsActive && (
						<div>
							<b></b>
							<b></b>
						</div>
					)}
					<a
						href="#"
						onClick={handleClientsClick}
						className={
							isClientsActive
								? 'navigation__item navigation__item_active'
								: 'navigation__item'
						}
					>
						<span className="navigation__icon-container">
							<img
								src={isClientsActive ? peopleBlack : people}
								className="navigation__icon"
							/>
						</span>
						<span className="navigation__title">Клиенты</span>
					</a>
				</li>
				<li
					className={
						isDebitorsActive
							? 'navigation__list navigation__list_active'
							: 'navigation__list'
					}
				>
					{isDebitorsActive && (
						<div>
							<b></b>
							<b></b>
						</div>
					)}
					<a
						href="#"
						onClick={handleDebitorsClick}
						className={
							isDebitorsActive
								? 'navigation__item navigation__item_active'
								: 'navigation__item'
						}
					>
						<span className="navigation__icon-container">
							<img
								src={isDebitorsActive ? stormBlack : storm}
								className="navigation__icon"
							/>
						</span>
						<span className="navigation__title">Список должников</span>
					</a>
				</li>
				<li
					className={
						isSettingsActive
							? 'navigation__list navigation__list_active'
							: 'navigation__list'
					}
				>
					{isSettingsActive && (
						<div>
							<b></b>
							<b></b>
						</div>
					)}
					<a
						href="#"
						onClick={handleSettingsClick}
						className={
							isSettingsActive
								? 'navigation__item navigation__item_active'
								: 'navigation__item'
						}
					>
						<span className="navigation__icon-container">
							<img
								src={isSettingsActive ? settingsBlack : settings}
								className="navigation__icon"
							/>
						</span>
						<span className="navigation__title">Настройки</span>
					</a>
				</li>
				<li
					className={
						isExitActive
							? 'navigation__list navigation__list_active'
							: 'navigation__list'
					}
				>
					{isExitActive && (
						<div>
							<b></b>
							<b></b>
						</div>
					)}
					<a
						href="#"
						onClick={handleExitClick}
						className={
							isExitActive
								? 'navigation__item navigation__item_active'
								: 'navigation__item'
						}
					>
						<span className="navigation__icon-container">
							<img
								src={isExitActive ? exitBlack : exit}
								className="navigation__icon"
							/>
						</span>
						<span className="navigation__title">Выйти</span>
					</a>
				</li>
			</ul>
			<div
				onClick={handleOpenMenu}
				className={
					isMenuOpened
						? 'navigation__toogle navigation__toogle_active'
						: 'navigation__toogle'
				}
			></div>
		</div>
	);
}

export default Navigation;

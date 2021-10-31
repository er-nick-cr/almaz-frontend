import React, { useState } from 'react';

function Customers() {
	const [isFocused, setIsFocused] = useState(false);

	function handleEnableFocus() {
		setIsFocused(true);
	}

	function handleDisableFocus() {
		setIsFocused(false);
	}

	return (
		<section className="customers">
			<div className="customers__header">
				<fieldset
					className={
						isFocused
							? `customers__input-container customers__input-container_focused`
							: 'customers__input-container'
					}
					onFocus={handleEnableFocus}
					onBlur={handleDisableFocus}
				>
					<input
						className="customers__search-input"
						placeholder="Поиск по названию заказчика"
					/>
				</fieldset>
				<button type="button" className="customers__add-button">
					<p className="customers__button-text">Добавить заказчика</p>
				</button>
			</div>
			<div className="customers__list"></div>
		</section>
	);
}

export default Customers;

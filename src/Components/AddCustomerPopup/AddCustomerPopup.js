import React from 'react';

function AddCustomerPopup() {
	return (
		<section className="customer-popup">
			<h3 className="customer-popup__heading">Добавить нового заказчика</h3>
			<form className="customer-popup__form">
				<fieldset className="customer-popup__input-container">
					<input
						className="customer-popup__input"
						name="name"
						type="text"
						required
						placeholder="Введите название организации"
					/>
					<input
						className="customer-popup__input"
						name="email"
						type="email"
						required
						placeholder="Введите email организации"
					/>
					<input
						className="customer-popup__input"
						name="adress"
						type="text"
						required
						placeholder="Введите email организации"
					/>
					<select name="price">
						<option value="" disabled>
							Выберете прайслист
						</option>
						<option value="">Обычный</option>
						<option value="">Для своих</option>
						<option value="">VIP</option>
					</select>
				</fieldset>
			</form>
		</section>
	);
}

export default AddCustomerPopup;

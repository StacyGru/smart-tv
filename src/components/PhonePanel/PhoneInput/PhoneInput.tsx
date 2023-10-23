import React, {useCallback, useEffect} from "react";
import InputMask from "react-input-mask";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, SET_PHONE_NUMBER} from "store/store.ts";

const PhoneInput = () => {
	const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);
	const phoneNumber = useSelector((state: initialStateType) => state.phoneNumber);
	const dispatch = useDispatch();

	const handleKeyDown = useCallback((event: { key: string; }) => {
		if (/^\d$/.test(event.key) || event.key === 'Backspace') {
			window.document.getElementById("phoneInput")?.focus();
		}
	}, []);

	useEffect(() => {
		if (isPhonePanelVisible) {
			window.document.getElementById("phoneInput")?.focus();
			window.addEventListener('keydown', handleKeyDown, true);

		} else {
			window.document.getElementById("phoneInput")?.blur();
			window.removeEventListener('keydown', handleKeyDown, true);
		}
	}, [isPhonePanelVisible, handleKeyDown]);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: SET_PHONE_NUMBER,
			payload: event.target.value.replace(/\D/g, "").slice(1)
		});
	}

	return (
		<InputMask
			mask="+7(999)999-99-99"
			maskChar="_"
			id="phoneInput"
			type="tel"
			placeholder="+7(___)___-__-__"
			className="bg-mainBlue w-full focus:outline-none"
			value={phoneNumber}
			onChange={(e) => handleInputChange(e)}
		/>
	);
}

export default PhoneInput;
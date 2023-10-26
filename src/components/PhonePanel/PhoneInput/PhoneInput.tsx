import React, {useCallback, useEffect, useRef} from "react";
import InputMask from "react-input-mask";
import {useSelector} from "react-redux";
import {setPhoneNumber} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";

const PhoneInput = () => {
	const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);
	const phoneNumber = useSelector((state: initialStateType) => state.phoneNumber);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleKeyDown = useCallback((event: { key: string; }) => {
		if (/^\d$/.test(event.key) || event.key === 'Backspace') {
			window.document.getElementById("phoneInput")?.focus();
		}
	}, []);

	useEffect(() => {
		if (isPhonePanelVisible) {
			window.addEventListener('keydown', handleKeyDown, true);

		} else {
			window.document.getElementById("phoneInput")?.blur();
			window.removeEventListener('keydown', handleKeyDown, true);
		}
	}, [isPhonePanelVisible, handleKeyDown]);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		store.dispatch(setPhoneNumber(event.target.value.replace(/\D/g, "").slice(1)));
		const inputElement = inputRef.current;
		inputElement?.setSelectionRange(inputElement.value.length, inputElement.value.length);
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
import classNames from "classnames";
import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import QR from "assets/qr-code.png";
import Button from "components/Button";
import Cross from "components/SVG/CrossSVG";
import Text from "components/Text";
import {useButtonContext} from "context/ButtonContext.tsx";
import {setBannerVisibility, setPhonePanelVisibility, setSubmitted} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";
import ConfirmationButton from "./ConfirmationButton";
import OnscreenKeyboard from "./OnscreenKeyboard";
import PersonalDataAgreement from "./PersonalDataAgreement";
import PhoneInput from "./PhoneInput";

export type PhonePanelProps = {
	className?: string;
};

const PhonePanel: React.FC<PhonePanelProps> = ({
		className
	}) => {
	const phoneNumber = useSelector((state: initialStateType) => state.phoneNumber);
	const isPhoneEntered = useSelector((state: initialStateType) => state.isPhoneEntered);
	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const applicationAccepted = useSelector(
		(state: initialStateType) => state.applicationAccepted
	);
	const buttonRefs = useButtonContext();
	const [focusedButtonIndex, setFocusedButtonIndex] = useState(5);
	const buttonAmount = 12;
	let timer: NodeJS.Timeout;

	function setInactivityTimer() {
		timer = setTimeout(() => {
			store.dispatch(setPhonePanelVisibility(false));
			store.dispatch(setBannerVisibility(true));
		}, 10000);
	}

	function resetInactivityTimer() {
		clearTimeout(timer);
		setInactivityTimer();
	}

	useEffect(() => {
		setInactivityTimer();
		window.addEventListener("mousemove", resetInactivityTimer);
		window.addEventListener("keydown", resetInactivityTimer);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("mousemove", resetInactivityTimer);
			window.removeEventListener("keydown", resetInactivityTimer);
		};
	}, []);

	useEffect(() => {
		store.dispatch(setSubmitted(false));
	}, [phoneNumber]);

	useEffect(() => {
		buttonRefs.current[focusedButtonIndex]?.focus();
	}, [focusedButtonIndex]);

	useEffect(() => {
		if (isPhoneEntered && personalDataAgreement) {
			buttonRefs.current[13]?.focus();
		}
	}, [isPhoneEntered, personalDataAgreement]);

	useEffect(() => {
		if (applicationAccepted) {
			buttonRefs.current[-1]?.focus();
		}
	}, [applicationAccepted]);

	function hidePhonePanel() {
		store.dispatch(setPhonePanelVisibility(false));
	}

	function handleBlur() {
		if (applicationAccepted) {
			buttonRefs.current[-1]?.focus();
		}
	}

	function handleKeyDown(event: { key: string; }) {
		switch (event.key) {
			case 'ArrowLeft':
				if (focusedButtonIndex === -1) {  // from Cross button to numbers
					setFocusedButtonIndex(3);
				} else {
					setFocusedButtonIndex((prevIndex) => (prevIndex - 1 + buttonAmount) % buttonAmount);
				}
				break;
			case 'ArrowRight':
				if ([3, 6, 9, 11, 12, 13].includes(focusedButtonIndex)) {  // from numbers to Cross button
					setFocusedButtonIndex(-1);
				} else if (focusedButtonIndex === -1) {
					setFocusedButtonIndex(-1);
				} else {
					setFocusedButtonIndex((prevIndex) => (prevIndex + 1 + buttonAmount) % buttonAmount);
				}
				break;
			case 'ArrowUp':
				if ([1, 2, 3].includes(focusedButtonIndex)) { // from numbers to Cross button
					setFocusedButtonIndex(-1);
				} else if (focusedButtonIndex === -1) {
					setFocusedButtonIndex(-1);
				}	else if (focusedButtonIndex === 11) {
					setFocusedButtonIndex(9);
				} else if (focusedButtonIndex === 12) {
					setFocusedButtonIndex(10);
				} else if (focusedButtonIndex === 13) {
					setFocusedButtonIndex(12);
				} else {
					setFocusedButtonIndex((prevIndex) => (prevIndex - 3 + buttonAmount) % buttonAmount);
				}
				break;
			case 'ArrowDown':
				if (focusedButtonIndex === -1) {   // from Cross button to numbers
					setFocusedButtonIndex(3);
				} else if (focusedButtonIndex === 8 || focusedButtonIndex === 9) {
					setFocusedButtonIndex((prevIndex) => (prevIndex + 2 + buttonAmount) % buttonAmount);
				} else if (focusedButtonIndex === 10 || focusedButtonIndex === 11) {
					setFocusedButtonIndex(12);
				} else if (focusedButtonIndex === 12 && isPhoneEntered && personalDataAgreement) {
					setFocusedButtonIndex(13);
				} else {
					setFocusedButtonIndex((prevIndex) => (prevIndex + 3 + buttonAmount) % buttonAmount);
				}
				break;
		}
	}

	return (
		<div
			onKeyDown={handleKeyDown}
		>
			<div
				className={classNames(
					"absolute top-0 left-0 flex flex-col h-full w-[380px] bg-mainBlue py-[40px] px-[24px] items-center text-center gap-[13px]",
					className,
					applicationAccepted ? "justify-start" : "justify-center"
				)}
			>
				{!applicationAccepted ? (
					<>
						<Text type="header">
							Введите ваш номер<br />
							мобильного телефона
						</Text>

						<PhoneInput />

						<Text type="sub-text">
							и с Вами свяжется наш менеджер для<br />
							дальнейшей консультации
						</Text>

						<OnscreenKeyboard/>

						<PersonalDataAgreement/>

						<ConfirmationButton />
					</>
				) : (
					<div className="flex flex-col gap-[15px] mt-[224px]">
						<Text type={"tel-number"}>
							ЗАЯВКА<br />
							ПРИНЯТА
						</Text>
						<Text type={"sub-text"}>
							Держите телефон под рукой.<br />
							Скоро с Вами свяжется наш менеджер.
						</Text>
					</div>
				)}
			</div>

			<Button
				type="white-border"
				className="absolute top-[20px] right-[20px] cross-button"
				onClick={hidePhonePanel}
				refValue={(button) => (buttonRefs.current[-1] = button)}
				onBlur={handleBlur}
			>
				<Cross
					className="cross-icon"
				/>
			</Button>

			<div
				className="absolute bottom-[40px] right-[40px] text-white flex gap-[10px] place-items-center"
			>
				<Text type={"text"}>
					СКАНИРУЙТЕ QR-КОД <br/>
					ДЛЯ ПОЛУЧЕНИЯ <br/>
					ДОПОЛНИТЕЛЬНОЙ <br/>
					ИНФОРМАЦИИ
				</Text>
				<img
					src={QR}
					alt="qr-code"
					className="w-[126px] h-[126px]"
				/>
			</div>
		</div>
	);
}

export default PhonePanel;
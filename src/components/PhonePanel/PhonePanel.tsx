import classNames from "classnames";
import React, {useCallback, useEffect, useState} from "react";
import InputMask from 'react-input-mask';
import {useSelector} from "react-redux";
import Check from "assets/check.svg";
import Button from "components/Button";
import Text from "components/Text";
import {initialStateType} from "store/store.ts";

export type PhonePanelProps = {
	className?: string;
}

const PhonePanel: React.FC<PhonePanelProps> = ({
		className
  }) => {
	const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);
	const numbers: number[] = Array.from({ length: 10 }, (_, index) => index);
	const [isChecked, setChecked] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");

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

	function onscreenKeyboard(number: number) {
		if (phoneNumber.length < 10) {
			setPhoneNumber(phoneNumber + number.toString());
		}
	}

	function backspaceKey() {
		setPhoneNumber(phoneNumber.slice(0, -1));
	}
	
	return (
		<div
			className={classNames(
				"absolute top-0 left-0 flex flex-col h-full w-[380px] bg-mainBlue py-[40px] px-[24px] items-center justify-center text-center gap-[13px]",
				className
			)}
		>
			<Text type="header">
				Введите ваш номер<br/>
				мобильного телефона
			</Text>
			<InputMask
				mask="+7(999)999-99-99"
				maskChar="_"
				id="phoneInput"
				type="tel"
				placeholder="+7(___)___-__-__"
				className="bg-mainBlue w-full focus:outline-none"
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(1))}
			/>
			<Text type="sub-text">
				и с Вами свяжется наш менеждер для<br/>
				дальнейшей консультации
			</Text>

			<div
				className="grid grid-cols-3 gap-[10px] py-[20px]"
			>
				{numbers.map((number) => (
					<Button
						type="blue-border"
						key={number}
						className="first:order-last"
						onClick={() => onscreenKeyboard(number)}
					>
						<Text type="text">{number}</Text>
					</Button>
				))}
				<Button
					type="blue-border"
					className="col-span-2 !w-[186px]"
					onClick={() => backspaceKey()}
				>
					<Text type="text">СТЕРЕТЬ</Text>
				</Button>
			</div>

			<div
				className="flex gap-[10px] p-[10px] place-self-start ml-[24px]"
			>
				<input
					type="checkbox"
					id="personal_data"
					className="w-[40px] h-[40px] outline outline-2 outline-black cursor-pointer"
					checked={isChecked}
					onChange={() => setChecked(!isChecked)}
				/>
				<label
					htmlFor="personal_data"
				>
					{isChecked &&
						<img
							src={Check}
							alt="check"
							className="absolute -ml-[30px] -translate-x-1/2 mt-[20px] -translate-y-1/2 cursor-pointer"
						/>
					}
					<Text type="text">
						Согласие на обработку<br/>
						персональных данных
					</Text>
				</label>
			</div>

			<Button
				type="blue-border"
				className="w-[284px]"
			>
				<Text type="text">ПОДТВЕРДИТЬ НОМЕР</Text>
			</Button>
		</div>
  );
}

export default PhonePanel;
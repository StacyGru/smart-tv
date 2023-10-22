import classNames from "classnames";
import React, {useState} from "react";
import InputMask from 'react-input-mask';
import Check from "assets/check.svg";
import Button from "components/Button";
import Text from "components/Text";

export type PhonePanelProps = {
	className?: string;
}

const PhonePanel: React.FC<PhonePanelProps> = ({
		className
  }) => {
	const numbers: number[] = Array.from({ length: 9 }, (_, index) => index + 1);
	const [isChecked, setChecked] = useState(false);
	
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
			/>
			<Text type="sub-text">
				и с Вами свяжется наш менеждер для<br/>
				дальнейшей консультации
			</Text>

			<div
				className="grid grid-cols-3 gap-[10px] py-[20px]"
			>
				{numbers.map((item) => (
					<Button type="blue-border" key={item}><Text type="text">{item}</Text></Button>
				))}
				<Button
					type="blue-border"
					className="col-span-2 !w-[186px]"
				>
					<Text type="text">СТЕРЕТЬ</Text>
				</Button>
				<Button type="blue-border"><Text type="text">0</Text></Button>
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
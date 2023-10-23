import classNames from "classnames";
import React, {useState} from "react";
import Check from "assets/check.svg";
import Button from "components/Button";
import Text from "components/Text";
import OnscreenKeyboard from "./OnscreenKeyboard";
import PhoneInput from "./PhoneInput";

export type PhonePanelProps = {
	className?: string;
}

const PhonePanel: React.FC<PhonePanelProps> = ({
		className
  }) => {
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

			<PhoneInput/>

			<Text type="sub-text">
				и с Вами свяжется наш менеджер для<br/>
				дальнейшей консультации
			</Text>
			
			<OnscreenKeyboard/>

			<div
				className="flex gap-[20px] p-[10px] place-self-start ml-[24px]"
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
					className="flex"
				>
					{isChecked &&
						<img
							src={Check}
							alt="check"
							className="absolute -ml-[40px] -translate-x-1/2 mt-[20px] -translate-y-1/2 cursor-pointer"
						/>
					}
					<Text
						type="sub-text"
						className="text-secondaryGray my-auto"
					>
						Согласие на обработку<br/>
						персональных данных
					</Text>
				</label>
			</div>

			<Button
				type="blue-border"
				className="!w-[284px]"
			>
				<Text type="text">ПОДТВЕРДИТЬ НОМЕР</Text>
			</Button>
		</div>
  );
}

export default PhonePanel;
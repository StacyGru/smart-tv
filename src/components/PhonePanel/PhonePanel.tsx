import classNames from "classnames";
import React from "react";
import {useSelector} from "react-redux";
import Text from "components/Text";
import {initialStateType} from "../../store/store.ts";
import ConfirmationButton from "./ConfirmationButton";
import OnscreenKeyboard from "./OnscreenKeyboard";
import PersonalDataAgreement from "./PersonalDataAgreement";
import PhoneInput from "./PhoneInput";

export type PhonePanelProps = {
	className?: string;
}

const PhonePanel: React.FC<PhonePanelProps> = ({
		className
  }) => {
	const applicationAccepted = useSelector((state: initialStateType) => state.applicationAccepted);

	return (
		<div
			className={classNames(
				"absolute top-0 left-0 flex flex-col h-full w-[380px] bg-mainBlue py-[40px] px-[24px] items-center text-center gap-[13px]",
				className,
				applicationAccepted ? "justify-start" : "justify-center"
			)}
		>
			{!applicationAccepted
				?
					<>
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

						<PersonalDataAgreement/>

						<ConfirmationButton/>
					</>
				:
					<div
						className="flex flex-col gap-[15px] mt-[224px]"
					>
						<Text type={"tel-number"}>
							ЗАЯВКА<br/>
							ПРИНЯТА
						</Text>
						<Text type={"sub-text"}>
							Держите телефон под рукой.<br/>
							Скоро с Вами свяжется наш менеджер.
						</Text>
					</div>
			}
		</div>
  );
}

export default PhonePanel;
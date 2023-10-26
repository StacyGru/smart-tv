import classNames from 'classnames';
import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import QR from "assets/qr-code.png"
import Button from "components/Button";
import Text from "components/Text";
import {setPhonePanelVisibility} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";

export type BannerProps = {
	className?: string;
	buttonRefs?: React.RefObject<HTMLButtonElement[]>;
}

const Banner: React.FC<BannerProps> = ({
		className,
  }) => {
	const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (!isPhonePanelVisible) {
			buttonRef.current?.focus();
		} else {
			buttonRef.current?.blur();
		}
	}, [isPhonePanelVisible]);

	function showPhonePanel() {
		store.dispatch(setPhonePanelVisibility(true));
	}

	function handleBlur() {
		buttonRef.current?.focus();
	}

	return (
		<div
			className={classNames(
				className,
				"bg-mainBlue absolute top-1/2 right-0 transform -translate-y-1/2 px-[10px] pt-[20px] pb-[10px] text-center flex flex-col items-center gap-[20px] w-[250px]"
			)}
		>
			<Text type="text" className={"text-css"}>
				ИСПОЛНИТЕ МЕЧТУ ВАШЕГО <br/>
				МАЛЫША! <br/>
				ПОДАРИТЕ ЕМУ СОБАКУ!
			</Text>
			<img
				src={QR}
				alt="qr-code"
				className="w-[126px] h-[126px]"
			/>
			<Text type="sub-text">
				Сканируйте QR-код <br/>
				или нажмите ОК
			</Text>

			<Button
				type={"blue-border"}
				className="!w-[156px]"
				onClick={showPhonePanel}
				refValue={buttonRef}
				onBlur={handleBlur}
			>
				<Text type="text">ОК</Text>
			</Button>
		</div>
	);
}

export default Banner;
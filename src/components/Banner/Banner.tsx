import classNames from 'classnames';
import React from "react";
import {useDispatch} from "react-redux";
import QR from "assets/qr-code.png"
import Button from "components/Button";
import Text from "components/Text";
import {SET_PHONE_PANEL_VISIBILITY} from "store/store.ts";

export type BannerProps = {
	className?: string;
}

const Banner: React.FC<BannerProps> = ({
		className
  }) => {
	const dispatch = useDispatch();

	function showPhonePanel() {
		dispatch({
			type: SET_PHONE_PANEL_VISIBILITY,
			payload: true
		});
	}

	return (
		<div
			className={classNames(
				"bg-mainBlue absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full px-[10px] pt-[20px] pb-[10px] text-center flex flex-col items-center gap-[20px] w-[250px]",
				className
			)}
		>
			<Text type="text">
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
				type="dark-blue"
				onClick={showPhonePanel}
			>
				<Text type="text">ОК</Text>
			</Button>
		</div>
	);
}

export default Banner;
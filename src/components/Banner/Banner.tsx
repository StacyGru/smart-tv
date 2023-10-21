import classNames from 'classnames';
import React from "react";
import QR from "assets/qr-code.png"
import Button from "components/Button";
import Text from "components/Text";

export type BannerProps = {
	className?: string
}

const Banner: React.FC<BannerProps> = ({
		className
  }) => {


	return (
		<div
			className={classNames(
				"bg-mainBlue absolute top-1/2 right-0 transform -translate-y-1/2 px-2.5 pt-30px pb-2.5 text-center flex flex-col items-center gap-5",
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
				className="w-32 h-32"
			/>
			<Text type="sub-text">
				Сканируйте QR-код <br/>
				или нажмите ОК
			</Text>
			<Button type="dark-blue">
				<Text type="text">ОК</Text>
			</Button>
		</div>
	);
}

export default Banner;
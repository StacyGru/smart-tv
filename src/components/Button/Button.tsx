import classNames from "classnames";
import React from "react";

export type ButtonProps = {
	type: "dark-blue" | "blue-border" | "white-border";
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
		type,
		children,
		onClick,
		className
  }) => {

	const baseClassName = "p-[16px] h-[52px] flex items-center justify-center transition duration-200"

	let classNameType = "";
	switch (type) {
		case "dark-blue":
			classNameType  = "bg-black text-mainBlue w-[156px] hover:opacity-80";
			break;
		case "blue-border":
			classNameType  = "bg-mainBlue text-black w-[88px] outline outline-2 outline-black hover:bg-black hover:text-white";
			break;
		case "white-border":
			classNameType  = "bg-white text-black w-[88px] outline outline-2 outline-black hover:bg-mainBlue";
			break;
	}

	return (
		<button
			className={classNames(baseClassName, classNameType, className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
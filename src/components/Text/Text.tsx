import classNames from "classnames";
import React from "react";

export type TextProps = {
	type: "header" | "text" | "sub-text" | "tel-number";
	children: React.ReactNode;
	className?: string;
}

const Text: React.FC<TextProps> = ({
		type,
		children,
		className
  }) => {
	const tag = type === "header" ? "h1" : "p";
	let classNameType = "";

	switch (type) {
		case "header":
			classNameType = "text-[26px] leading-[30px] font-normal";
			break;
		case "text":
			classNameType = "text-[16px] leading-[19px] font-semibold";
			break;
		case "sub-text":
			classNameType = "text-[14px] leading-[16px] font-normal";
			break;
		case "tel-number":
			classNameType = "text-[36px] leading-[37px] font-bold";
			break;
	}

	return (
		React.createElement(
			tag,
			{ className: classNames(classNameType, className) },
			children
		)
	);
}

export default Text;
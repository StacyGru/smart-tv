import React from "react";

export type TextProps = {
	type: "header" | "text" | "sub-text" | "tel-number",
	children: React.ReactNode
}

const Text: React.FC<TextProps> = ({
		type,
		children
  }) => {
	const tag = type === "header" ? "h1" : "p";
	let className = "";

	switch (type) {
		case "header":
			className = "text-[26px] leading-[30px] font-normal";
			break;
		case "text":
			className = "text-[16px] leading-[19px] font-semibold";
			break;
		case "sub-text":
			className = "text-[14px] leading-[16px] font-normal";
			break;
		case "tel-number":
			className = "text-[36px] leading-[37px] font-bold";
			break;
	}

	return (
		React.createElement(
			tag,
			{ className },
			children
		)
	);
}

export default Text;
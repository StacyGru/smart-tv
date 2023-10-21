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
			className = "text-3xl font-normal";
			break;
		case "text":
			className = "text-base font-semibold";
			break;
		case "sub-text":
			className = "text-sm font-normal";
			break;
		case "tel-number":
			className = "text-4xl font-bold";
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
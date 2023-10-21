import React from "react";

export type ButtonProps = {
	type: "dark-blue" | "dark-white" | "transparent",
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
		type,
		children
  }) => {
	let className = "";
	switch (type) {
		case "dark-blue":
			className  = "p-4 bg-black text-mainBlue w-40 hover:opacity-80";
			break;
	}

	return (
		<button
			className={className}
		>
			{children}
		</button>
	);
}

export default Button;
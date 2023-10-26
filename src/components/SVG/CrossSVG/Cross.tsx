import React from 'react';

export type CustomIconProps = {
	className?: string;
}

const Cross: React.FC<CustomIconProps> = ({
		className
	}) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="current"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<line x1="9.93934" y1="29.4454" x2="30.4454" y2="8.93934" stroke="current" strokeWidth="3" />
			<line x1="10.0607" y1="8.93934" x2="30.5668" y2="29.4454" stroke="current" strokeWidth="3" />
		</svg>
	);
};

export default Cross;
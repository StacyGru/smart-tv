import React from 'react';

export type CustomIconProps = {
	className?: string;
	onClick?: () => void;
}

const Check: React.FC<CustomIconProps> = ({
		className,
		onClick
	}) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="current"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			onClick={onClick}
		>
			<line x1="9.06066" y1="20.5659" x2="16.0607" y2="27.5659" stroke="current" strokeWidth="3"/>
			<line x1="14.2953" y1="27.5659" x2="30.9218" y2="10.9393" stroke="current" strokeWidth="3"/>
		</svg>
	);
};

export default Check;
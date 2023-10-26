import React, {createContext, useContext, useRef, ReactNode, MutableRefObject} from 'react';

type ButtonContextType = {
	buttonRefs: MutableRefObject<(HTMLButtonElement | HTMLInputElement | null)[]>;
};

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

interface ButtonProviderProps {
	children: ReactNode;
}

export const ButtonProvider: React.FC<ButtonProviderProps> = ({ children }) => {
	const buttonRefs = useRef<(HTMLButtonElement | HTMLInputElement | null)[]>([]);
	return (
		<ButtonContext.Provider value={{ buttonRefs }}>
			{children}
		</ButtonContext.Provider>
	);
};

export const useButtonContext = () => {
	const context = useContext(ButtonContext);
	if (!context) {
		throw new Error('useButtonContext must be used within a ButtonProvider');
	}
	return context.buttonRefs;
};

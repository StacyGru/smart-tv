import { useSelector } from 'react-redux';
import Button from 'components/Button';
import Text from 'components/Text';
import {useButtonContext} from "context/ButtonContext.tsx";
import {setPhoneNumber} from 'store/actions.ts';
import { initialStateType, store } from 'store/store.ts';

const OnscreenKeyboard = () => {
	const phoneNumber = useSelector((state: initialStateType) => state.phoneNumber);
	const numbers: number[] = Array.from({ length: 10 }, (_, index) => index);
	const buttonRefs = useButtonContext();

	function onscreenKeyboard(number: number) {
		if (phoneNumber.length < 10) {
			store.dispatch(setPhoneNumber(phoneNumber + number.toString()));
		}
	}

	function backspaceKey() {
		store.dispatch(setPhoneNumber(phoneNumber.slice(0, -1)));
	}

	return (
		<div
			className="grid grid-cols-3 gap-[10px] py-[20px]"
		>
			{numbers.map((number, index) => (
				<Button
					type="blue-border"
					key={number}
					className={index === 0 ? 'first:order-last' : ''}
					onClick={() => onscreenKeyboard(number)}
					refValue={
						index === 0
							?
							(button) => (buttonRefs.current[11] = button)
							:
							(button) => (buttonRefs.current[index] = button)
					}
				>
					<Text type="text">{number}</Text>
				</Button>
			))}
			<Button
				type="blue-border"
				className="col-span-2 !w-[186px]"
				onClick={() => backspaceKey()}
				refValue={(button) => (buttonRefs.current[10] = button)}
			>
				<Text type="text">СТЕРЕТЬ</Text>
			</Button>
		</div>
	);
};

export default OnscreenKeyboard;

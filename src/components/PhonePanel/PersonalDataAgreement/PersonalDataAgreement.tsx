import {useSelector} from "react-redux";
import Check from "components/SVG/CheckSVG";
import Text from "components/Text";
import {useButtonContext} from "context/ButtonContext.tsx";
import {setPersonalDataAgreement} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";

const PersonalDataAgreement= () => {

	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const buttonRefs = useButtonContext();
	
	function handleChange() {
		store.dispatch(setPersonalDataAgreement(!personalDataAgreement));
	}

	function handleKeyDown(event: { key: string; }) {
		if (event.key === 'Enter') {
			store.dispatch(setPersonalDataAgreement(!personalDataAgreement));
		}
	}
	
	return (
		<div
			className="flex gap-[20px] p-[10px] place-self-start ml-[24px]"
		>
			<input
				type="checkbox"
				id="personal_data"
				className="w-[40px] h-[40px] outline outline-2 outline-black cursor-pointer focus:bg-black check-input"
				checked={personalDataAgreement}
				onChange={handleChange}
				ref={(input) => (buttonRefs.current[12] = input)}
				onKeyDown={handleKeyDown}
			/>
			{personalDataAgreement &&
				<Check
					className="absolute ml-[20px] -translate-x-1/2 mt-[20px] -translate-y-1/2 cursor-pointer check-icon"
					onClick={handleChange}
				/>
			}
			<label
				htmlFor="personal_data"
				className="flex"
			>

				<Text
					type="sub-text"
					className="text-secondaryGray my-auto"
				>
					Согласие на обработку<br/>
					персональных данных
				</Text>
			</label>
		</div>
	);
}

export default PersonalDataAgreement;
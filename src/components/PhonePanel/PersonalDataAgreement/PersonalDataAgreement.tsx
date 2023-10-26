import {useSelector} from "react-redux";
import Check from "components/SVG/CheckSVG";
import Text from "components/Text";
import {useButtonContext} from "context/ButtonContext.tsx";
import {setPersonalDataAgreement} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";

const PersonalDataAgreement= () => {

	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const buttonRefs = useButtonContext();
	const isPhoneValid = useSelector((state: initialStateType) => state.isPhoneValid);
	const isSubmitted = useSelector((state: initialStateType) => state.isSubmitted);
	
	function handleChange() {
		store.dispatch(setPersonalDataAgreement(!personalDataAgreement));
	}

	function handleKeyDown(event: { key: string; }) {
		if (event.key === 'Enter') {
			store.dispatch(setPersonalDataAgreement(!personalDataAgreement));
		}
	}
	
	if (isSubmitted && !isPhoneValid) {
		return (
			<div
				className="flex h-[52px] p-[10px] place-content-center align-middle"
			>
				<Text type={"text"} className="text-invalidRed m-auto">НЕВЕРНО ВВЕДЁН НОМЕР</Text>
			</div>
		);
	} else {
		return (
			<div
				className="flex gap-[20px] px-[10px] py-[6px] place-self-start ml-[24px]"
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
						className="absolute cursor-pointer check-icon"
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
}

export default PersonalDataAgreement;
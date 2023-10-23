import {useDispatch, useSelector} from "react-redux";
import Check from "assets/check.svg";
import Text from "components/Text";
import {initialStateType, SET_PERSONAL_DATA_AGREEMENT} from "store/store.ts";

const PersonalDataAgreement = () => {
	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const dispatch = useDispatch();
	
	function handleChange() {
		dispatch({
			type: SET_PERSONAL_DATA_AGREEMENT,
			payload: !personalDataAgreement
		});
	}
	
	return (
		<div
			className="flex gap-[20px] p-[10px] place-self-start ml-[24px]"
		>
			<input
				type="checkbox"
				id="personal_data"
				className="w-[40px] h-[40px] outline outline-2 outline-black cursor-pointer"
				checked={personalDataAgreement}
				onChange={handleChange}
			/>
			<label
				htmlFor="personal_data"
				className="flex"
			>
				{personalDataAgreement &&
					<img
						src={Check}
						alt="check"
						className="absolute -ml-[40px] -translate-x-1/2 mt-[20px] -translate-y-1/2 cursor-pointer"
					/>
				}
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
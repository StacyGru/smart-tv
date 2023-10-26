import {Dispatch} from "react";
import {setApplicationAccepted, setPhoneNumberValidity, setSubmitted} from "./actions.ts";
import {actionType} from "./store.ts";

export const validatePhoneNumber = (phoneNumber: string) => {
	const accessKey: string = "03697a85d0efe6b2096119d80281ead2";
	const countryCode: string = "RU";
	return function (dispatch: Dispatch<actionType>) {
		fetch(
			`http://apilayer.net/api/validate?access_key=${accessKey}&number=${phoneNumber}&country_code=${countryCode}`
		)
			.then(response => response.json())
			.then(json => {
				dispatch(setSubmitted(true));
				dispatch(setPhoneNumberValidity(json.valid));
				if (json.valid === true) {
					dispatch(setApplicationAccepted(true));
				}
			})
	}
}
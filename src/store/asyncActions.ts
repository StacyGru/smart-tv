import {Dispatch} from "react";
import {setApplicationAccepted, setPhoneNumberValidity, setSubmitted} from "./actions.ts";
import {actionType} from "./store.ts";

export const validatePhoneNumber = (phoneNumber: string) => {
	const myHeaders = new Headers();
	myHeaders.append("apikey", "aIBbeJwr7uFgGd0vWuVixciTkqaAzMok");
	const requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders
	};
	return function (dispatch: Dispatch<actionType>) {
		fetch(
			`https://api.apilayer.com/number_verification/validate?number=+7${phoneNumber}`,
						requestOptions
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
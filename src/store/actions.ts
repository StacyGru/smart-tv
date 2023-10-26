import {
	SET_APPLICATION_ACCEPTED,
	SET_BANNER_VISIBILITY,
	SET_PERSONAL_DATA_AGREEMENT,
	SET_PHONE_NUMBER, SET_PHONE_NUMBER_VALIDITY,
	SET_PHONE_PANEL_VISIBILITY, SET_SUBMITTED
} from "./reducers.ts";

export const setBannerVisibility = (value: boolean) => ({
	type: SET_BANNER_VISIBILITY,
	payload: value,
});

export const setPhonePanelVisibility = (value: boolean) => ({
	type: SET_PHONE_PANEL_VISIBILITY,
	payload: value,
});

export const setPhoneNumber = (value: string) => ({
	type: SET_PHONE_NUMBER,
	payload: value,
});

export const setPersonalDataAgreement = (value: boolean) => ({
	type: SET_PERSONAL_DATA_AGREEMENT,
	payload: value,
});

export const setApplicationAccepted = (value: boolean) => ({
	type: SET_APPLICATION_ACCEPTED,
	payload: value,
});

export const setPhoneNumberValidity = (value: boolean) => ({
	type: SET_PHONE_NUMBER_VALIDITY,
	payload: value,
});

export const setSubmitted = (value: boolean) => ({
	type: SET_SUBMITTED,
	payload: value,
});
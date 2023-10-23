import { configureStore } from "@reduxjs/toolkit";

export type actionType = {
	type: string;
	payload: string | boolean;
}

export type initialStateType = {
	showBanner: boolean;
	showPhonePanel: boolean;
	phoneNumber: string;
	phoneIsEntered: boolean;
	personalDataAgreement: boolean;
	applicationAccepted: boolean;
}

export const initialState: initialStateType = {
	showBanner: false,
	showPhonePanel: false,
	phoneNumber: "",
	phoneIsEntered: false,
	personalDataAgreement: false,
	applicationAccepted: false
}

export const SET_BANNER_VISIBILITY = "SET_BANNER_VISIBILITY";
export const SET_PHONE_PANEL_VISIBILITY = "SET_PHONE_PANEL_VISIBILITY";
export const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
export const SET_PERSONAL_DATA_AGREEMENT = "SET_PERSONAL_DATA_AGREEMENT";
export const SET_APPLICATION_ACCEPTED = "SET_APPLICATION_ACCEPTED";

export const reducer = (state = initialState, action: actionType) => {
	switch (action.type) {
		case SET_BANNER_VISIBILITY:
			return {...state, showBanner: action.payload};
		case SET_PHONE_PANEL_VISIBILITY:
			return {...state, showPhonePanel: action.payload, showBanner: !state.showBanner};
		case SET_PHONE_NUMBER:
			if (typeof action.payload === "string") {
				return {...state, phoneNumber: action.payload, phoneIsEntered: action.payload.length === 10};
			} else return state;
		case SET_PERSONAL_DATA_AGREEMENT:
			return {...state, personalDataAgreement: action.payload};
		case SET_APPLICATION_ACCEPTED:
			return {...state, applicationAccepted: action.payload};
		default:
			return state;
	}
}

export const store = configureStore({
	reducer: reducer,
	preloadedState: initialState
});
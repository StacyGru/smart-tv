import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {reducer} from "./reducers.ts";

export type actionType = {
	type: string;
	payload: string | boolean;
}

export type initialStateType = {
	showBanner: boolean;
	showPhonePanel: boolean;
	phoneNumber: string;
	isPhoneEntered: boolean;
	isPhoneValid: boolean;
	personalDataAgreement: boolean;
	isSubmitted: boolean;
	applicationAccepted: boolean;
}

export const initialState: initialStateType = {
	showBanner: false,
	showPhonePanel: false,
	phoneNumber: "",
	isPhoneEntered: false,
	isPhoneValid: false,
	personalDataAgreement: false,
	isSubmitted: false,
	applicationAccepted: false,
}

const middleware = [thunk];

export const store = configureStore({
	reducer: reducer,
	preloadedState: initialState,
	...middleware
});
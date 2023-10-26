import { configureStore } from "@reduxjs/toolkit";
import {reducer} from "./reducers.ts";

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
	applicationAccepted: false,
}

export const store = configureStore({
	reducer: reducer,
	preloadedState: initialState,
});
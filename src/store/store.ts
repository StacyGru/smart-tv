import { configureStore } from "@reduxjs/toolkit";

export type initialStateType = {
	showBanner: boolean;
	showPhonePanel: boolean;
}

export type actionType = {
	type: string;
	payload: never;
}

export const initialState: initialStateType = {
	showBanner: false,
	showPhonePanel: false
}

export const SET_BANNER_VISIBILITY = "SET_BANNER_VISIBILITY";
export const SET_PHONE_PANEL_VISIBILITY = "SET_PHONE_PANEL_VISIBILITY";

export const reducer = (state = initialState, action: actionType) => {
	switch (action.type) {
		case SET_BANNER_VISIBILITY:
			return {...state, showBanner: action.payload};
		case SET_PHONE_PANEL_VISIBILITY:
			return {...state, showPhonePanel: action.payload, showBanner: !state.showBanner};
		default:
			return state;
	}
}

export const store = configureStore({
	reducer: reducer,
	preloadedState: initialState
});
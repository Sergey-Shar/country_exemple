import { Middleware } from "redux";
import { RootState } from "../redux/store";
import { AppAction } from "../redux/actions/types";

export const logsTypeActionMiddleware: Middleware<object, RootState> = () => {
	return (next) => {
		return (action: AppAction) => {
			console.log('middleware:', action)
			next(action)
		}
	}
}
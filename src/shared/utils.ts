import { Response } from "./api/types";

export const isSuccessResponse = <T>( res:Response<T>): res is Response<T> => {
	return res.success
}
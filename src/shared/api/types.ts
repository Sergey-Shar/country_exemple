
export interface CountryAll {
 "flags": {
"png": string,
"svg": string,
"alt": string
},
"name": {
"common": string,
"official": string,
"nativeName": {
"fra": {
"official": string,
"common": string
},
}
},
"capital": string[],
"region": string ,
"population": number
}

export interface SuccessResponse<T> {
    success: true,
    data: T
}
 
export interface ErrorResponse {
 success: false,
 error?: string,
}

export type Response<T = never> = ErrorResponse | SuccessResponse<T>


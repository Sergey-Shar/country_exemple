
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


export interface PostsResponse {
    count: number,
    next: string,
    previous: string,
    "results": Posts[]
}

export interface Posts {
	id: number
	image: string
	text: string
	date: string
	lesson_num: number
	title: string
	description: string
	author: string
}


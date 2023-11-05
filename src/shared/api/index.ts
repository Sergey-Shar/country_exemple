import axios from 'axios'
class Api {
	protected BASE_URL = 'https://studapi.teachmeskills.by/blog'
	protected api
	constructor() {
		this.api = axios.create({
			baseURL: this.BASE_URL
		})
	}
}

export default Api
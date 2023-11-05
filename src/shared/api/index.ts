
import axios from 'axios'

class Api {
	protected BASE_URL = 'https://restcountries.com/v3.1/'

	protected api
	constructor() {
		this.api = axios.create({
			baseURL: this.BASE_URL,
			headers: { 'X-Custom-Header': 'foobar' }
		})
	}
}

export default Api
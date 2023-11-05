
import Api from '.'
import { PostsResponse } from './types'

class PostsApi extends Api {
	async fetchAll(limit: number, offset: number, searchParam = ''): Promise<PostsResponse> {
		const { data } = await this.api.get<PostsResponse>(`/posts/?limit=${limit}&offset=${offset}&search=${searchParam}`)
		return data
	}
}
export default new PostsApi()

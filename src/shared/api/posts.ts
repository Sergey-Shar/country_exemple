
import Api from '.'
import { PostsResponse } from './types'
class PostsApi extends Api {
	async fetchAll(offset: number): Promise<PostsResponse> {
		const { data } = await this.api.get<PostsResponse>(`/posts/?limit=10&offset=${offset}`)
		return data
	}
}
export default new PostsApi()

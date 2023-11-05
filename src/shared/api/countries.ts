import Api from "."
import { CountryAll } from "./types"

class CountriesApi extends Api {
	endpointAll = 'all?fields=name,capital,flags,population,region'
	
 async fetchAll(): Promise<CountryAll[]> {
  const { data } = await this.api.get<CountryAll[]>(this.endpointAll)
  console.log('data:',data)
  return data
 }
}
export default new CountriesApi()
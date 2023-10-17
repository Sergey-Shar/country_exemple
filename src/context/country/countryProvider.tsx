import { ReactNode, useState } from "react";
import { CountryContext } from "./countryContext";
import { useFetch } from "../../shared";
import { CountryAll } from "../../shared/api/types";
import { BASE_URL_ALL } from "../../shared/api";

export const CountryProvider = ({ children }: { children: ReactNode }) => {
 const [searchValue, setSearchValue] = useState('')
 
	const { response, error } = useFetch<CountryAll>(BASE_URL_ALL)
	
 
const filteredCountry = response.filter((country) =>
	country.name.common.toLowerCase().includes(searchValue.toLowerCase())
)

 return (
		<CountryContext.Provider value={{ filteredCountry, error, setSearchValue }}>
			{children}
		</CountryContext.Provider>
	)
}
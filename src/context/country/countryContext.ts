import { createContext } from "react";
import { CountryAll } from "../../shared/api/types";

export const CountryContext = createContext<{
	filteredCountry: CountryAll[]
	error: unknown
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
}>({
	filteredCountry: [],
	error: null,
	setSearchValue: () => {}
})
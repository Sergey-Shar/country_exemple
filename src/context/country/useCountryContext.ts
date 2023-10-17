import { useContext } from "react"
import { CountryContext } from "./countryContext"

export const useCountryContext = () => {
 return useContext(CountryContext)
}
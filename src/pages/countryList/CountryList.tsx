import { CountryCard, SearchControl } from "../../components";
import { useCountryContext } from "../../context/country/useCountryContext";
import styles from "./styles.module.css";

export const CountryList = () => {
 const { filteredCountry } = useCountryContext()
 console.log(filteredCountry)
	return (
		<>
			<SearchControl />
			<div className="container">
			<ol className={styles.countryList}>
				{filteredCountry?.length > 0 ? (
					filteredCountry?.map((country) => (
						<li key={country.name.common}>
							<CountryCard
								name={country.name.official}
								capital={country.capital.map( item => item)}
								flags={country.flags}
								population={country.population} />
						</li>
					))
				) : (
					<div>Loading...</div>
				)}
			</ol>
			</div>
		</>
	)
}

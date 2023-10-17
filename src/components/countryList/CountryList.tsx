import { CountryCard } from "..";
import { useCountryContext } from "../../context/country/useCountryContext";
import styles from "./styles.module.css";

export const CountryList = () => {
 const { filteredCountry } = useCountryContext()
 
	return (
		<div className="container">
			<ol className={styles.countryList}>
				{filteredCountry?.length > 0 ? (
					filteredCountry.map((country) => (
						<li key={country.name.common}>
							<CountryCard
								name={country.name.common}
								capital={...country.capital}
								flags={country.flags}
								population={country.population}
							/>
						</li>
					))
				) : (
					<div>Loading...</div>
				)}
			</ol>
		</div>
	)
}

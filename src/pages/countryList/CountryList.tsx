import { useEffect } from "react";
import { CountryCard, SearchControl } from "../../components";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux";

import styles from "./styles.module.css";
import { fetchCountriesThunk } from "../../redux/actions/countriesActions";
import { BASE_URL_ALL } from "../../shared/api";

export const CountryList = () => {

	const dispatch = useAppDispatch()
	
	useEffect(() => {
	dispatch(fetchCountriesThunk(BASE_URL_ALL))
	}, [dispatch])
	
	const { isLoading, countries } = useAppSelector( (state) => state.countries)
	
	return (
		<>
			<SearchControl />
			<div className="container">
				<ol className={styles.countryList}>
					{!isLoading ? (
						countries?.map((country) => (
							<li key={country.name.common}>
								<CountryCard
									name={country.name.official}
									capital={country.capital.map((item) => item)}
									flags={country.flags}
									population={country.population}
								/>
							</li>
						))
					) : (
						<div>Loader...</div>
					)}
				</ol>
			</div>
		</>
	)
}

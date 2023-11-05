import { useEffect } from "react";
import { CountryCard, SearchControl } from "../../components";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux";
import styles from "./styles.module.css";
import { fetchCountriesThunk } from "../../redux";


export const CountryList = () => {

	const dispatch = useAppDispatch()
	
	useEffect(() => {
	dispatch(fetchCountriesThunk())
	}, [dispatch])
	
	const { isLoading, countriesAll, error } = useAppSelector((state) => state.countries)
	console.log(error)
	return (
		<>
			<SearchControl />
			<div className="container">
				<ol className={styles.countryList}>
					{!isLoading ? (
						countriesAll?.map((country) => (
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

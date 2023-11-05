import { useEffect, useState } from "react";
import { AppPagination, CountryCard, SearchControl } from "../../components";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux";
import styles from "./styles.module.css";
import { fetchCountriesThunk } from "../../redux";
import { CountryAll } from "../../shared/api/types";


export const CountryList = () => {

	const dispatch = useAppDispatch()
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
	dispatch(fetchCountriesThunk())
	}, [dispatch])

	const { isLoading, countriesAll } = useAppSelector((state) => state.countries)

	const countCountries = countriesAll?.length
	const pageSize = 6
 
	const pagination = (
		items: CountryAll[],
		currentPage: number,
		pageSize: number
	) => {
		const startIndex = (currentPage - 1) * pageSize
		return [...items].splice(startIndex, pageSize)
	}

	const paginatedCountries = pagination(countriesAll, currentPage, pageSize)
	

	return (
		<>
			<SearchControl  />
			<div className="container">
				<ol className={styles.countryList}>
					{!isLoading ? (
						paginatedCountries?.map((country) => (
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
				<AppPagination
					count={countCountries}
					page={pageSize}
					currentPage={currentPage}
					setPage={setCurrentPage}
				/>
			</div>
		</>
	)
}

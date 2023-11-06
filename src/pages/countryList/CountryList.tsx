import { useEffect, useState } from "react";
import { AppPagination, CountryCard, SearchControl } from "../../components";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux";
import styles from "./styles.module.css";
import { fetchCountriesThunk } from "../../redux";
import { CountryAll } from "../../shared/api/types";


export const CountryList = () => {

	const dispatch = useAppDispatch()
	// определяем текущую страницу
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
	dispatch(fetchCountriesThunk())
	}, [dispatch])

	const { isLoading, countriesAll } = useAppSelector((state) => state.countries)

	// получаем длину массива для пагинации
	const countCountries = countriesAll?.length
	// определяем лимит для отображения на странице
	const pageSize = 6
 
// функция для обрезки массива 
	const pagination = (
		items: CountryAll[],
		currentPage: number,
		pageSize: number
	) => {
		// определяем индекс первого элемента на странице
		const startIndex = (currentPage - 1) * pageSize
		// обрезаем массив по индексу первого элемента и количеству элементов на странице
		return [...items].splice(startIndex, pageSize)
	}

// получаем отфильтрованный массив и делаем по нему map
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

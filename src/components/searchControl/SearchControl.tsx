import { ChangeEvent } from 'react'
import { useCountryContext } from '../../context'
import styles from './styles.module.css'

export const SearchControl = () => {
   const { setSearchValue } = useCountryContext()
   
   const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
   }
   
	return (
		<div className="container">
			<div className={styles.searchControl}>
				<input
					className={styles.input}
					onChange={handleSearch}
					type="text"
					placeholder="Search..."
				/>
			</div>
		</div>
	)
}

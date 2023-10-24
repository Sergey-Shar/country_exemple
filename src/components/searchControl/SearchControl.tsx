
import styles from './styles.module.css'

export const SearchControl = () => {
   
   const handleSearch = () => {
    
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

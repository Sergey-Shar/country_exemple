import Form from 'react-bootstrap/Form'
import _ from 'lodash'
import styles from './styles.module.css'

interface SearchControlProps {
	onChange: (value: string) => void
}
export const SearchControl = ({ onChange }: SearchControlProps) => {

const debounce = _.debounce((event) => onChange( event?.target?.value), 300)

	return (
		<div className="container">
			<div className={styles.searchControl}>
				<Form.Control
					size="lg"
					onChange={(event) => debounce(event)}
					className="w-75"
					type="text"
					placeholder="Search..."
				/>
			</div>
		</div>
	)
}

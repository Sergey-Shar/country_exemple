import Form from 'react-bootstrap/Form'
import _ from 'lodash'
import styles from './styles.module.css'

interface SearchControlProps {
	onSelect: (value: string) => void
	onChange: (value: string) => void
}
export const SearchControl = ({ onSelect, onChange }: SearchControlProps) => {

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
				<Form.Select
					size="lg"
					className="w-25"
					aria-label="Default select example"
					onChange={( event) => onSelect( event?.target?.value)}
				>
					<option>Limit pages</option>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="20">20</option>
				</Form.Select>
			</div>
		</div>
	)
}

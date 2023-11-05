
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import styles from './styles.module.css'
export const CardPlaceholder = () => {

	return (
		<Card className={styles.card}>
			<Card.Img className={styles.img} variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Placeholder as={Card.Title} animation="glow">
					<Placeholder xs={6} />
				</Placeholder>
				<Placeholder as={Card.Text} animation="glow">
					<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					<Placeholder xs={6} /> <Placeholder xs={8} />
				</Placeholder>
				<Placeholder.Button variant="primary" xs={6} />
			</Card.Body>
		</Card>
	)
}

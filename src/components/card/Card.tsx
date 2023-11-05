import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css'

interface CardProps {
	id: number
	image: string
	date: string
	title: string
	description: string
}

export const AppCard = ({ id, title, description, image, date }: CardProps) => {

	const navigate = useNavigate()
	
	return (
		<Card className={styles.card}>
			<Card.Img className={styles.img} variant="top" src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text className={styles.description}>{description}</Card.Text>
				<Card.Text>{date}</Card.Text>
				<Card.Text>{id}</Card.Text>
				<Button
					onClick={() => {
						navigate(`/posts/${id}`)
					}}
					variant="primary"
				>
					View Post
				</Button>
			</Card.Body>
		</Card>
	)
}
 

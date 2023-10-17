import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

interface CountryCardProps {
 name: string,
 capital: string[],
 flags: {
  png: string,
  svg: string,
  alt: string
 },
 population: number
}

export const CountryCard = ({ name, capital, flags, population }: CountryCardProps) => {
const navigate = useNavigate()
	return (
		<div onClick={() => {navigate(`/countries/${name}`)}} className={styles.cardWrapper}>
			<div className={styles.card}>
				<img className={styles.flag} src={flags.svg} alt={flags.alt} />
				<h1>{name}</h1>
				<h2>{capital}</h2>
				<p>Population: {population}</p>
			</div>
		</div>
	)
}
 

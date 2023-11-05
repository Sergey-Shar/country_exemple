import { useCallback, useEffect, useRef, useState } from 'react'
import { AppCard } from '../../components'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/useRedux'
import styles from './styles.module.css'
import { fetchPostsThunk } from '../../redux'
import { CardPlaceholder } from '../../components/cardPlaceholder/CardPlaceholder'

export const PostsList = () => {

	const dispatch = useAppDispatch()
	const [offset, setOffset] = useState(0)
	const [pageNumber, setPageNumber] = useState(1)
	const { status, results, hasMore } = useAppSelector((state) => state.posts)

	useEffect(() => {
		dispatch(fetchPostsThunk({offset}))
	}, [dispatch, offset])

	useEffect(() => {
		setOffset((pageNumber - 1) * 20)
	}, [pageNumber])

	const observer = useRef<IntersectionObserver>()

	const lastNodeRef = useCallback(
		(node: HTMLLIElement) => {
				if (status === 'loading') {
					return
				}
				if (observer.current) {
					observer.current.disconnect()
				}
				observer.current = new IntersectionObserver((entries) => {
					if(entries[0].isIntersecting && hasMore) {
						setPageNumber((prev) => prev + 1)
					}
				})
				if (node) {
					observer.current.observe(node)
				}
		},[status, hasMore]
	)
	
	return (
		<>
			<div className="container">
				<ol className={styles.countryList}>
					{status === 'success' &&
						results?.map((post, index) => {
							if (results.length - 5 === index + 1) {
								return (
									<li ref={lastNodeRef} key={post.id}>
										<AppCard
											id={post.id}
											title={post.title}
											description={post.text}
											image={post.image}
											date={post.date}
										/>
									</li>
								)
							} else {
								return (
									<li key={post.id}>
										<AppCard
											id={post.id}
											title={post.title}
											description={post.text}
											image={post.image}
											date={post.date}
										/>
									</li>
								)
							}
						})}
					{status === 'loading' &&
						[...Array(20)].map((_, index) => <CardPlaceholder key={index} />)}
				</ol>
			</div>
		</>
	)
}

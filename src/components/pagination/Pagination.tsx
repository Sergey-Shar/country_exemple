import Pagination from 'react-bootstrap/Pagination'
import _ from 'lodash'

interface PaginationProps {
	count: number
	page: number
	setPage: (page: number) => void
	currentPage: number
}
export const AppPagination = ({
	count,
	page,
	setPage,
	currentPage
}: PaginationProps) => {
	const total = Math.ceil(count / page)
	const pages = _.range(1, total + 1)

	const cropPages = (pages: number[]) => {
		if (pages.length <= 5) {
			return pages
		}
		if (currentPage <= 3) {
			return pages.slice(0, 5)
		}
		if (currentPage + 2 >= total) {
			return pages.slice(total - 5, total)
		}
		return pages.slice(currentPage - 3, currentPage + 2)
	}

	const pagesCrop = cropPages(pages)

	return (
		<Pagination size="lg">
   <Pagination.First
    disabled={currentPage === 1}
    onClick={() => setPage(1)} />
			<Pagination.Prev
				disabled={currentPage === 1}
				onClick={() => {
					if (currentPage > 1) {
						setPage(currentPage - 1)
					}
				}}
			/>
			{pagesCrop.map((page) => (
					<Pagination.Item
						key={page}
						active={page === currentPage}
						onClick={() => setPage(page)}
					>
						{page}
					</Pagination.Item>
			))}
			{pagesCrop[pagesCrop.length - 1] < total - 1 && (
				<>
					<Pagination.Ellipsis />
     <Pagination.Item
      key={total}
						active={total === currentPage}
						onClick={() => setPage(total)}
					>
						{total}
					</Pagination.Item>
				</>
			)}
			<Pagination.Next
				disabled={currentPage === total}
				onClick={() => {
					if (currentPage < total) {
						setPage(currentPage + 1)
					}
				}}
			/>
			<Pagination.Last
				disabled={currentPage === total}
				onClick={() => setPage(total)}
			/>
		</Pagination>
	)
}

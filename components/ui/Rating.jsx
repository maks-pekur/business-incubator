export const Rating = ({ value }) => {
	return (
		<div className="py-2">
			{[...Array(5)].map((star, index) => {
				index += 1
				return (
					<span
						key={index}
						className={index <= value ? 'text-yellow-400' : 'text-gray-400'}
					>
						&#9733;
					</span>
				)
			})}
		</div>
	)
}

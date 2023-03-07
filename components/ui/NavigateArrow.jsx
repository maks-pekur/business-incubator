const styles = {
	left: '',
	right: 'rotate-180',
	black: 'border-black bg-black fill-white',
	white:
		'border-white fill-white hover:fill-black hover:bg-[var(--green)] hover:border-[var(--green)]',
	outline: 'border-black fill-black hover:fill-white hover:bg-black',
}

export const NavigateArrow = ({ onClick, variant, direction, id }) => {
	return (
		<div id={id} onClick={onClick} className="z-10">
			<svg
				width="8"
				height="12"
				viewBox="0 0 8 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`border-[1px] rounded-full w-16 h-16 p-6 transition-colors duration-100 ${styles[direction]} ${styles[variant]}`}
			>
				<path
					d="M7.42188 1.40625L2.82812 6L7.42188 10.5938L6.01562 12L0.015625 6L6.01562 0L7.42188 1.40625Z"
					fill=""
				/>
			</svg>
		</div>
	)
}

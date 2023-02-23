const styles = {
	outline:
		'bg-transparent fill-black text-black hover:bg-black hover:text-white hover:fill-white',
	black:
		'bg-black text-white hover:bg-[var(--green)] hover:text-black fill-white',
	green: 'bg-[var(--green)] hover:bg-black hover:text-white',
}

export const Button = ({ title, variant, isLoading, onClick }) => {
	return (
		<button
			type="submit"
			onClick={onClick}
			className={`px-6 py-3 rounded-full border-black border-[1px] space-x-6 flex items-center justify-center transition-colors duration-200 ${styles[variant]}`}
		>
			{isLoading ? (
				<svg
					className="animate-spin h-5 w-5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			) : (
				<>
					<span>{title}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="none"
						viewBox="0 0 256 256"
					>
						<rect width="25" height="25" fill="none"></rect>
						<line
							x1="40"
							y1="128"
							x2="216"
							y2="128"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="16"
						></line>
						<polyline
							points="144 56 216 128 144 200"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="16"
						></polyline>
					</svg>
				</>
			)}
		</button>
	)
}

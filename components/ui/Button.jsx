const styles = {
	outline: 'bg-transparent text-black hover:bg-black hover:text-white',
	black: 'bg-black text-white hover:bg-[var(--green)] hover:text-black',
	green: 'bg-[var(--green)] hover:bg-black hover:text-white',
}

export const Button = ({ title, variant, iconColor }) => {
	return (
		<button
			type="submit"
			className={`px-6 py-3 rounded-full border-black border-[1px] space-x-6 flex items-center transition-colors duration-200 ${styles[variant]}`}
		>
			<span>{title}</span>
			{iconColor && (
				<svg
					width="19"
					height="6"
					viewBox="0 0 19 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_49_329)">
						<path d="M15.2 3H0" stroke={iconColor} />
						<path
							d="M19 2.99999L15.2 0.299988V5.69999L19 2.99999Z"
							fill={iconColor}
						/>
					</g>
					<defs>
						<clipPath id="clip0_49_329">
							<rect width="19" height="6" fill={iconColor} />
						</clipPath>
					</defs>
				</svg>
			)}
		</button>
	)
}

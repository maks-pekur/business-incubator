const styles = {
	green: 'bg-[var(--green)]',
	black: 'bg-black text-[var(--green)]',
}

export const NumSection = ({ number, title, variant, classNames }) => {
	return (
		<div>
			<div className="space-x-4 flex items-center">
				<div
					className={`w-16 h-16 rounded-full flex items-center justify-center ${styles[variant]}`}
				>
					{number}
				</div>
				<div className={classNames}>{title}</div>
			</div>
		</div>
	)
}

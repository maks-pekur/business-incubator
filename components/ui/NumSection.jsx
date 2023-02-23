const styles = {
	green: 'bg-[var(--green)]',
	black: 'bg-black text-[var(--green)]',
}

export const NumSection = ({ number, title, variant, classNames }) => {
	return (
		<div className="h-full">
			<div className="space-x-4 flex items-center">
				<div
					className={`w-20 h-20 rounded-full flex items-center justify-center ${styles[variant]}`}
				>
					{number}
				</div>
				<div className={classNames}>{title}</div>
			</div>
		</div>
	)
}

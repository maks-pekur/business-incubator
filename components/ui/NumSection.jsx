export const NumSection = ({ number, title, classNames }) => {
	return (
		<div className="h-full">
			<div className="space-x-4 flex items-center">
				<div className="w-20 h-20 rounded-full bg-[var(--green)] flex items-center justify-center">
					{number}
				</div>
				<div className={classNames}>{title}</div>
			</div>
		</div>
	)
}

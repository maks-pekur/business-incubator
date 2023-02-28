import Link from 'next/link'

const styles = {
	outline:
		'bg-transparent fill-black text-black hover:bg-black hover:text-white hover:fill-white',
	black:
		'bg-black text-white hover:bg-[var(--green)] hover:text-black fill-white',
	green: 'bg-[var(--green)] hover:bg-black hover:text-white text-black',
}

export const LinkComponent = ({ href, title, variant }) => {
	return (
		<Link
			href={href}
			className={`px-6 py-3 rounded-full border-black border-[1px] space-x-6 flex items-center justify-center transition-colors duration-200 ${styles[variant]}`}
		>
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
		</Link>
	)
}

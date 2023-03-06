import { Heading } from './ui/Heading'

export const GreenSection = ({ children, title }) => {
	return (
		<section className={`pb-6 sticky bg-black overflow-hidden`}>
			<div
				className="absolute inset-0 -z-10"
				style={{
					backgroundImage: `url("../public/assets/images/sot.svg")`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					width: '100%',
					height: '100%',
				}}
			></div>
			<div className="bg-[var(--green)] md:p-28 p-6 rounded-3xl">
				<div className="flex flex-col items-center justify-center w-full h-full space-y-6 md:space-y-10 rounded-xl">
					<Heading classNames="text-center md:text-start" tag={'h2'}>
						{title}
					</Heading>
					<div className="text-center flex items-center justify-center">
						{children}
					</div>
				</div>
			</div>
		</section>
	)
}

import Image from 'next/image'
import sotLeft from '../public/assets/images/sot-left.svg'
import sotRight from '../public/assets/images/sot-right.svg'
import { Heading } from './ui/Heading'

export const GreenSection = ({ children, title }) => {
	return (
		<section className="pb-6 sticky bg-black overflow-hidden">
			<div className="relative bg-[var(--green)] h-[400px] rounded-3xl ">
				<div className="hidden absolute inset-0 md:flex justify-between">
					<Image src={sotLeft} alt="" />
					<Image src={sotRight} alt="" />
				</div>

				<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full space-y-6 md:space-y-10 rounded-xl">
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

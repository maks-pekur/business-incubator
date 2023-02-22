import Image from 'next/image'
export const CircleSlider = () => {
	return (
		<div className="flex items-center justify-between h-full">
			<div>
				<div className="border-[1px] rounded-full h-12 w-12 hover:border-[var(--green)] transition-colors duration-100 border-white flex items-center justify-center">
					<Image
						src={'/assets/images/navigate_arrow.svg'}
						width={15}
						height={15}
					/>
				</div>
			</div>

			<div className="relative flex items-center justify-center rounded-full bg-[#3C3B3B] h-[75%]">
				<div
					style={{
						backgroundImage: 'url(/assets/images/process-outer-circle.svg)',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						height: '800px',
						width: '800px',
					}}
				></div>
			</div>

			<div className="border-[1px] rounded-full h-12 w-12 hover:border-[var(--green)] transition-colors duration-100 border-white flex items-center justify-center rotate-180">
				<Image
					src={'/assets/images/navigate_arrow.svg'}
					width={15}
					height={15}
				/>
			</div>
		</div>
	)
}

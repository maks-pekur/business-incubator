import Image from 'next/image'
import React from 'react'
import { NumSection } from './ui/NumSection'

export const VS = () => {
	return (
		<section className="bg-[var(--dark-gray)] p-14">
			<div>
				<NumSection number={'04'} title={''} />
				<div className="flex flex-col items-center">
					<div className="flex items-center text-white">
						<div>БЕЗ НАС</div>
						<div>
							<Image src={'/assets/images/vs.svg'} width={120} height={120} />
						</div>
						<div>C НАМИ</div>
					</div>
				</div>
			</div>
		</section>
	)
}

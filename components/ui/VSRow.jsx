import { useEffect, useState } from 'react'
import { useDevice } from '../../hooks/useDevice'
import { VSItem } from './VSItem'
function randomNumber() {
	return Math.floor(Math.random() * (100 - 70 + 1)) + 70 + '%'
}

export const VSRow = ({ textLeft, textRight, textCenter }) => {
	const [width, setWidth] = useState('')
	const device = useDevice()

	useEffect(() => {
		setWidth(randomNumber())
	}, [])

	return (
		<div className="w-full flex items-center relative py-2 text-[8px] sm:text-md md:text-lg overflow-hidden">
			<VSItem
				variant={'left'}
				text={textLeft}
				width={width}
				el={device === 'mobile' ? 'div' : ''}
			/>
			<div className="w-[250px] text-white mx-1 md:mx-6 text-center leading-[10px] md:leading-5	">
				{textCenter}
			</div>
			<VSItem
				variant={'right'}
				text={textRight}
				width={'full'}
				el={device === 'mobile' ? 'div' : ''}
			/>
		</div>
	)
}

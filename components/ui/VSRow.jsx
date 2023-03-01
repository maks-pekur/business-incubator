import { useEffect, useState } from 'react'
import { VSItem } from './VSItem'

function randomNumber() {
	return Math.floor(Math.random() * (100 - 70 + 1)) + 70 + '%'
}

export const VSRow = ({ textLeft, textRight, textCenter }) => {
	const [width, setWidth] = useState('')

	useEffect(() => {
		setWidth(randomNumber())
	}, [])

	return (
		<div className="w-full flex items-center relative py-2">
			<VSItem variant={'left'} text={textLeft} width={width} />
			<div className="max-w-[200px] text-white mx-6 text-center">
				{textCenter}
			</div>
			<VSItem variant={'right'} text={textRight} width={'full'} />
		</div>
	)
}

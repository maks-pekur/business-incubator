import { useEffect, useState } from 'react'

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		height: null,
	})

	useEffect(() => {
		const getSize = () => {
			return {
				height: window.innerHeight,
			}
		}
		const handleResize = () => {
			setWindowSize(getSize())
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

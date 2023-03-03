import { createContext, useContext, useEffect, useState } from 'react'

const DeviceContext = createContext()

export const useDevice = () => {
	return useContext(DeviceContext)
}

export const DeviceProvider = ({ children }) => {
	const [device, setDevice] = useState(null)

	const detectDevice = () => {
		if (window.innerWidth < 768) {
			setDevice('mobile')
		} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
			setDevice('tablet')
		} else if (window.innerWidth >= 1024) {
			setDevice('desktop')
		} else {
			setDevice(null)
		}

		return device
	}

	useEffect(() => {
		detectDevice()

		window.addEventListener('resize', detectDevice)

		return () => window.removeEventListener('resize', detectDevice)
	}, [])

	return (
		<DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
	)
}

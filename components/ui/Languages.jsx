import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const flags = {
	pl: '/assets/images/pl.svg',
	en: '/assets/images/gb.svg',
	uk: '/assets/images/ua.svg',
	ru: '/assets/images/ru.svg',
}

import '/node_modules/flag-icons/css/flag-icons.min.css'

export const Languages = ({ classNames }) => {
	const { locale, locales, asPath } = useRouter()
	const [lang, setLang] = useState(locale)
	const [isOpen, setOpen] = useState(false)

	const handleClick = locale => {
		setLang(locale)
		setOpen(false)
	}

	return (
		<div>
			<div
				onClick={() => setOpen(!isOpen)}
				className="relative rounded-full overflow-hidden w-6 h-6 flex items-center justify-center"
			>
				{!isOpen && (
					<Image src={flags[locale]} width={30} height={30} alt="language" />
				)}
			</div>

			{isOpen && (
				<div
					className={`absolute space-y-2 flex flex-col items-center  ${classNames}`}
				>
					{locales.map(l => {
						return (
							<Link
								key={l}
								href={asPath}
								locale={l}
								onClick={() => handleClick(l)}
								className="rounded-full overflow-hidden w-6 h-6 flex items-center justify-center"
							>
								<Image src={flags[l]} width={30} height={30} alt="language" />
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}

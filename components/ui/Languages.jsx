import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const flags = {
	pl: '/assets/images/pl.svg',
	en: '/assets/images/gb.svg',
	uk: '/assets/images/ua.svg',
	ru: '/assets/images/xx.svg',
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
		<div className="relative h-full flex items-center">
			<div
				onClick={() => setOpen(!isOpen)}
				className="absolute rounded-full overflow-hidden w-6 h-6"
			>
				{!isOpen && (
					<Image
						src={flags[locale]}
						fill
						alt="language"
						style={{ objectFit: 'cover' }}
					/>
				)}
			</div>

			{isOpen && (
				<div
					className={`absolute -top-3 space-y-2 flex flex-col items-center  ${classNames}`}
				>
					{locales.map(l => {
						return (
							<div className="relative rounded-full overflow-hidden w-6 h-6">
								<Link
									key={l}
									href={asPath}
									locale={l}
									onClick={() => handleClick(l)}
								>
									<Image src={flags[l]} fill alt="language" />
								</Link>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

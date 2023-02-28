import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import mail from '../public/assets/images/mail.svg'
import phone from '../public/assets/images/phone.svg'

export const Person = ({ person }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()
	return (
		<article className="flex flex-col justify-center items-center relative overflow-hidden rounded-2xl">
			<div>
				<Image src={person.img} width={350} height={300} alt="" />
			</div>
			<div className="bg-[var(--green)] w-full rounded-2xl px-8 py-2 flex flex-col absolute bottom-0 top-[90%] hover:top-[50%] transition-all duration-300">
				<div className="mb-4">
					<div className="text-2xl text-center">{t(`team:${person.name}`)}</div>
				</div>
				<div className="text-center text-xl mb-8 text-gray-500">
					{t(`team:${person.position}`)}
				</div>
				<div className="space-y-4">
					{person.mail && (
						<Link
							href={`mailto:${person.mail}`}
							className="flex items-center space-x-4 hover:text-gray-500"
						>
							<div>
								<Image
									src={mail}
									width={30}
									height={30}
									alt="mail"
									className="fill-black"
								/>
							</div>
							<div>{t(`team:${person.mail}`)}</div>
						</Link>
					)}
					{person.phone && (
						<Link
							href={`tel:${person.phone}`}
							className="flex items-center space-x-4 hover:text-gray-500 transition-colors duration-200"
						>
							<div>
								<Image
									src={phone}
									width={30}
									height={30}
									alt="phone"
									className="fill-black"
								/>
							</div>
							<div>{t(`team:${person.phone}`)}</div>
						</Link>
					)}
				</div>
			</div>
		</article>
	)
}

import Image from 'next/image'
import { useState } from 'react'
import mail from '../public/assets/images/mail.svg'
import phone from '../public/assets/images/phone.svg'

export const Person = ({ person }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<article className="flex flex-col justify-center items-center relative overflow-hidden">
			<div>
				<div>
					<Image src={person.img} width={350} height={300} alt="" />
				</div>
				<div className="p-4 w-full">
					<div className="text-2xl">{person.name}</div>
					<div>{person.position}</div>
				</div>
			</div>

			<div className="bg-[var(--green)] w-full rounded-2xl p-8 flex flex-col justify-between absolute bottom-0 top-[90%] hover:top-20 transition-all duration-300">
				<div className="flex items-end w-full justify-end">
					Закрыть
					<span className="ml-4 border-b-2 border-black w-8 h-1"></span>
				</div>
				<div className="p-4 w-full flex flex-col space-y-8">
					<div>
						<div className="text-2xl">{person.name}</div>
						<div>{person.position}</div>
					</div>
					<div>
						{person.mail && (
							<div className="flex items-center space-x-4">
								<div>
									<Image
										src={mail}
										width={30}
										height={30}
										alt="mail"
										className="fill-black"
									/>
								</div>
								<div>{person.mail}</div>
							</div>
						)}
						{person.phone && (
							<div className="flex items-center space-x-4">
								<div>
									<Image
										src={phone}
										width={30}
										height={30}
										alt="phone"
										className="fill-black"
									/>
								</div>
								<div>{person.phone}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}

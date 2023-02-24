import { NavigateArrow } from './ui/NavigateArrow'

import Image from 'next/image'
import { useState } from 'react'
import bank from '../public/assets/images/bank-account.svg'
import crm from '../public/assets/images/crm.svg'
import legalAdvice from '../public/assets/images/legal-advice.svg'
import legalPerson from '../public/assets/images/legal-person.svg'
import menedger from '../public/assets/images/menedger.svg'
import relocate from '../public/assets/images/relocate.svg'
import taxConsultant from '../public/assets/images/tax-consulting.svg'
import tax from '../public/assets/images/tax.svg'

import circl from '../public/assets/images/circle-group.svg'

const carousel = [
	{ title: 'Релокейт в Польшу', id: 0, position: 1, icon: relocate },
	{ title: 'Бухгалтерское сопровождение', id: 1, position: 2, icon: tax },
	{ title: 'Юридическое лицо', id: 2, position: 3, icon: legalPerson },
	{ title: 'Юридическая помощь', id: 3, position: 4, icon: legalAdvice },
	{ title: 'Налоговый консалтинг', id: 4, position: 5, icon: taxConsultant },
	{ title: 'Банковский счет', id: 5, position: 6, icon: bank },
	{ title: 'Доступ к системе CRM', id: 6, position: 7, icon: crm },
	{ title: 'Менторство меннеджера', id: 7, position: 8, icon: menedger },
]

export const CircleSlider = () => {
	const [corner, setCorner] = useState(0)
	return (
		<div className="flex items-center justify-between h-full">
			<NavigateArrow
				direction={'left'}
				variant={'white'}
				onClick={() => {
					setCorner(prev => prev - 45)
				}}
			/>

			<div className="rounded-full bg-[#3C3B3B] p-20 w-[700px] h-[700px] flex items-center justify-center">
				<div className="flex items-center justify-center relative">
					<Image
						src={circl}
						width={1000}
						height={1000}
						className="bg-[var(--green)] rounded-full p-4"
						style={{
							transform: `rotate(${corner}deg)`,
							transition: 'all 1s linear',
						}}
					/>
					<div className="w-[50%] h-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#3C3B3B] rounded-full"></div>
				</div>
			</div>

			<NavigateArrow
				direction={'right'}
				variant={'white'}
				onClick={() => {
					setCorner(prev => prev + 45)
				}}
			/>
		</div>
	)
}

import Image from 'next/image'
import React from 'react'
import { NumSection } from './ui/NumSection'
import { VSRow } from './ui/VSRow'

const items = [
	{
		id: '01',
		textLeft: 'Минимум месяц',
		textCenter: 'Самостоятельная регистрация фирмы',
		textRight: 'С нами 30 минут',
	},
	{
		id: '02',
		textLeft: ' 12%/32% или 19%',
		textCenter: 'Подоходный налог',
		textRight: 'С нами 6% или 9.6%',
	},
	{
		id: '03',
		textLeft: '670-1753 PLN',
		textCenter: 'Взнос на соц. страхование',
		textRight: 'С нами = 0 PLN',
	},
	{
		id: '04',
		textLeft: ' 400 PLN',
		textCenter: 'Аренда офиса',
		textRight: 'С нами = 0 PLN',
	},
	{
		id: '05',
		textLeft: '600 PLN',
		textCenter: 'Бухгалтерское обслуживание',
		textRight: 'С нами = 0 PLN',
	},
	{
		id: '06',
		textLeft: '500 PLN',
		textCenter: 'Юридические услуги',
		textRight: 'С нами = 0 PLN',
	},
	{
		id: '07',
		textLeft: '400 PLN',
		textCenter: 'Маркетинговый консалтинг',
		textRight: 'С нами = 0 PLN',
	},
]

export const VS = () => {
	return (
		<section className="bg-[var(--dark-gray)] py-14">
			<div className="px-14">
				<NumSection number={'04'} title={''} variant={'green'} />
				<div className="flex flex-col items-center">
					<div className="flex items-center text-white mb-20">
						<div>БЕЗ НАС</div>
						<div>
							<Image src={'/assets/images/vs.svg'} width={100} height={100} />
						</div>
						<div>C НАМИ</div>
					</div>
				</div>
			</div>
			{items.map(({ id, textLeft, textCenter, textRight }) => (
				<VSRow
					key={id}
					textLeft={textLeft}
					textCenter={textCenter}
					textRight={textRight}
				/>
			))}
		</section>
	)
}

import { NumSection } from './ui/NumSection'

const carousel = [
	{
		id: '01',
		title: 'Релокейт в Польшу',
	},
	{
		id: '02',
		title: 'Бухгалтерское сопровождение',
	},
	{
		id: '03',
		title: 'Юридическое лицо',
	},
	{
		id: '04',
		title: 'Юридическая помощь',
	},
	{
		id: '05',
		title: 'Налоговый консалтинг',
	},
	{
		id: '06',
		title: 'Банковский счет',
	},
	{
		id: '07',
		title: 'Доступ к системе CRM',
	},
	{
		id: '08',
		title: 'Менторство меннеджера',
	},
]

export const WhatYouGetMobile = () => {
	return (
		<section className="sticky top-0 bg-black rounded-t-3xl pb-20">
			<div className="bg-[var(--dark-gray)] rounded-3xl p-6">
				<div>
					<NumSection
						number={'02'}
						title={'Что ты получишь'}
						variant={'green'}
						classNames={'text-white'}
					/>
				</div>
				<div>
					{carousel.map((item, idx) => (
						<div
							className="text-white text-[10px] border-b-2 border-white p-2.5 space-x-6 flex items-center"
							key={item.id}
						>
							<div className="border-[1px] border-white rounded-full w-6 h-6 text-[8px] flex items-center justify-center">
								{idx + 1}
							</div>
							<div>{item.title}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

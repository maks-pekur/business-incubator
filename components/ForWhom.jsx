import Image from 'next/image'
import img1 from '../public/assets/images/forWhom-1.svg'
import img2 from '../public/assets/images/forWhom-2.svg'
import img3 from '../public/assets/images/forWhom-3.svg'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

const items = [
	{
		id: '01',
		title: '',
		img: img1,
		list: [
			'Фотографы',
			'Видеографы',
			'Дизайнеры',
			'Архитекторы',
			'Таргетологи',
			'SMM-специалисты',
		],
	},
	{
		id: '02',
		title: '',
		img: img2,
		list: ['Журналисты', 'Коучи', 'Психологи'],
	},
	{
		id: '03',
		title: '',
		img: img3,
		list: [
			'ИТ-специалисты',
			'Копирайтеры',
			'Project-менеджера',
			'Онлайн школы / курсы',
			'Маркетологи',
			'Агенты по недвижимости',
		],
	},
]

export const ForWhom = () => {
	return (
		<section className="bg-white p-14 rounded-2xl">
			<div>
				<div>
					<NumSection
						number={'04'}
						title={'Для кого подойдет'}
						variant={'green'}
					/>
				</div>
				<div className="flex items-center justify-end w-full">
					<div className="space-y-6 max-w-[50%] pb-10">
						<Heading tag={'h2'}>Для кого подойдет бизнес-инкубатор?</Heading>
						<p>
							Если ты не нашёл себя в этом списке - смело пиши нам, мы с
							радостью поможем и подберём индивидуальный способ
							сотрудничества.Мы часто слышим, что нам легко удаётся объединять
							талантливых и интересных людей, а все потому что мы верим в силу
							синергии.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-10">
					{items.map(item => (
						<div
							key={item.id}
							className="bg-[var(--light-gray)] rounded-xl p-10 flex flex-col items-center"
						>
							<div className="mb-10 h-[200px] flex">
								<Image src={item.img} width={200} height={200} alt="" />
							</div>
							<div className="w-full">
								<ul className="w-full ml-6">
									{item.list.map(li => (
										<li className="mb-6 relative flex items-center" key={li}>
											<div className="bg-[var(--green)] w-4 h-4 rounded-full mr-6"></div>
											{li}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

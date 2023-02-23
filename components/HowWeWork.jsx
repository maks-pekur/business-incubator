import ReactSwipe from 'react-swipe'
import { NavigateArrow } from './ui/NavigateArrow'
import { NumSection } from './ui/NumSection'

const slides = [
	{
		id: '01',
		image: '',
		step: 'шаг 1',
		title: 'Ваш звонок или заявка на сайте',
	},
	{
		id: '02',
		image: '',
		step: 'шаг 2',
		title: 'Обработка данных менеджерами',
	},
	{
		id: '03',
		image: '',
		step: 'шаг 3',
		title: 'Бесплатная консультация',
	},
	{
		id: '04',
		image: '',
		step: 'шаг 4',
		title: 'Онлайн-сбор необходимых данных',
	},
	{
		id: '05',
		image: '',
		step: 'шаг 5',
		title: 'Подписание документов онлайн',
	},
	{
		id: '06',
		image: '',
		step: 'шаг 6',
		title: 'Старт вашей деятельности',
	},
]

export const HowWeWork = () => {
	let reactSwipeEl

	return (
		<section className="bg-[var(--light-gray)] rounded-3xl">
			<div className="grid grid-cols-3 h-full">
				<div className="flex flex-col justify-between p-14">
					<div>
						<NumSection
							number={'03'}
							title={'Как мы работаем'}
							variant={'green'}
						/>
					</div>
					<div className="flex items-center space-x-6">
						<NavigateArrow
							direction={'left'}
							variant={'outline'}
							onClick={() => reactSwipeEl.prev()}
						/>
						<NavigateArrow
							direction={'right'}
							variant={'outline'}
							onClick={() => reactSwipeEl.next()}
						/>
					</div>
				</div>

				<div className="col-span-2 py-14 h-full">
					<ReactSwipe
						ref={el => (reactSwipeEl = el)}
						swipeOptions={{
							speed: 1000,
							disableScroll: true,
						}}
					>
						<div className="border-[1px] border-black rounded-lg p-10">1</div>
						<div className="border-[1px] border-black rounded-lg p-10">2</div>
						<div className="border-[1px] border-black rounded-lg p-10">3</div>
						<div className="border-[1px] border-black rounded-lg p-10">4</div>
						<div className="border-[1px] border-black rounded-lg p-10">5</div>
						<div className="border-[1px] border-black rounded-lg p-10">6</div>
					</ReactSwipe>
				</div>
			</div>
		</section>
	)
}

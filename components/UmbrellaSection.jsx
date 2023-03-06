import Image from 'next/image'
import umbrella from '../public/assets/images/umbrella.png'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const UmbrellaSection = () => {
	return (
		<section className="pb-10 sticky -top-20 md:top-0  bg-black">
			<div className="grid md:grid-cols-2 h-full p-6 md:p-20 bg-white rounded-3xl overflow-hidden">
				<div className="relative">
					<div className="mb-6 md:mb-0">
						<NumSection number={'01'} title={''} variant={'green'} />
					</div>
					<div className="w-full h-full absolute -top-10 -right-20 bottom-0 hidden md:block">
						<Image
							src={umbrella}
							width={450}
							height={450}
							alt=""
							className="flex-end"
						/>
					</div>
				</div>

				<div className="md:space-y-8 space-y-4">
					<Heading tag={'h2'}>
						Фонд работает по системе umbrella company.
					</Heading>
					<div className="text-gray-400 text-lg leading-8 space-y-4">
						<p>
							Мы являемся сильной защитой и поддержкой для специалистов
							совершенно разных сфер и действующих предпринимателей. Наш фонд с
							радостью делится своими знаниями и всеми необходимыми
							инструментами, которые помогают реализовать бизнес-идею, делая это
							легко, безопасно и в правовом поле.
						</p>
						<p>
							Это фонд созданный с целью оптимизировать бизнес действующих
							предпринимателей, а также помочь тем, кто только начинает путь и
							желает открыть своё дело. Наша задача, сделать все необходимое,
							чтобы ты мог сосредоточиться на реализации своей идеи, не тратя
							время, энергию и деньги на бюрократию, связанную с открытием и
							ведением твоей компании.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

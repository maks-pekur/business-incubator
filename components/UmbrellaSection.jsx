import Image from 'next/image'
import umbrella from '../public/assets/images/umbrella.png'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const UmbrellaSection = () => {
	return (
		<section className="bg-white rounded-3xl p-6 md:px-14 md:pt-14 mb-6">
			<div className="grid md:grid-cols-2 h-full">
				<div className="flex">
					<NumSection number={'01'} title={''} variant={'green'} />
					<Image
						src={umbrella}
						width={400}
						height={400}
						alt=""
						className="flex-end"
					/>
				</div>
				<div className="md:space-y-8 space-y-4">
					<Heading tag={'h2'}>
						Фонд работает по системе umbrella company.
					</Heading>
					<div className="text-gray-500 space-y-4">
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

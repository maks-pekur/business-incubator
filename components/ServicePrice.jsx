import Image from 'next/image'
import cub from '../public/assets/images/cub.svg'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const ServicePrice = () => {
	return (
		<section className="bg-[var(--dark-gray)] rounded-3xl p-6 md:p-14 text-white mb-6 sticky-0">
			<div>
				<div>
					<NumSection number={'02'} title={'Услуги'} variant={'green'} />
				</div>
				<div className="grid md:grid-cols-2 gap-10">
					<div className="space-y-6 pt-6">
						<Heading tag={'h2'}>
							Полную ответственность за реализацию бизнеса несёт фонд FBA, а не
							Ты.
						</Heading>
						<p>
							Это означает лишь одно: Тебе не нужно бояться проверок со стороны
							налоговой инспекции, миграционной полиции и других гос. органов.
						</p>
					</div>
					<div>
						<div className="border-2 border-white h-full rounded-2xl">
							<div className="p-10 md:p-20">
								<Heading tag={'h2'} classNames={'text-center'}>
									Стоимость полного пакета услуг
								</Heading>
								<div className="flex items-center justify-center w-full">
									<Image src={cub} width={150} height={150} alt="" />
								</div>
							</div>
							<div className="bg-[var(--green)] w-full text-black text-2xl rounded-2xl text-center p-10">
								500 зл/месяц
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

import { useTranslation } from 'react-i18next'
import { Button } from './ui/Button'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const AboutUs = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-white rounded-3xl p-14">
			<div className="grid md:grid-cols-2 h-full">
				<div className="mb-8 md:mb-0">
					<NumSection
						number={'01'}
						title={t('home:section')}
						variant={'green'}
					/>
				</div>
				<div className="space-y-8">
					<Heading tag={'h2'}>Фонд Freedom Business Area</Heading>
					<div className="text-gray-500 space-y-4">
						<p>
							Видит своей миссией, помощь: Digital, IT специалистам и
							фрилансерам со всего мира вести виртуальные фирмы в Польше. Фонд
							FBA даёт уникальную возможность проверить свои бизнес-идеи в
							рыночных условиях.
						</p>
						<p>
							Мы уверены, что сможем удивить тебя оперативностью нашей работы.
							Все формальности связанные с открытием бизнеса решаются в течении
							одного рабочего дня. После этого каждый предприниматель может
							легально вести свой бизнес.
						</p>
					</div>
					<Button title={'Подробнее'} variant={'outline'} />
				</div>
			</div>
		</section>
	)
}
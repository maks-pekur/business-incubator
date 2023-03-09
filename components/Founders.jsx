import { useTranslation } from 'react-i18next'
import { founders } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'

export const Founders = () => {
	const { t } = useTranslation()
	return (
		<section>
			<div>
				<Heading tag={'h3'} classNames={'text-center py-28'}>
					{t('team:founders')}
				</Heading>
				<div className="grid md:grid-cols-3 gap-10 md:gap-20">
					{founders.map(founder => (
						<Person person={founder} />
					))}
				</div>
			</div>
		</section>
	)
}

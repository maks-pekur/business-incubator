import { useTranslation } from 'react-i18next'
import { founders } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'

export const Founders = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-white px-14">
			<div>
				<Heading tag={'h2'} classNames={'text-center py-10'}>
					{t('team:founders')}
				</Heading>
				<div className="grid grid-cols-3 gap-20">
					{founders.map(founder => (
						<Person person={founder} />
					))}
				</div>
			</div>
		</section>
	)
}

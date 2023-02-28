import { useTranslation } from 'react-i18next'
import { founders } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'

export const Founders = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-white p-14 rounded-3xl">
			<div>
				<Heading tag={'h2'} classNames={'text-center py-20'}>
					{t('team:founders')}
				</Heading>
				<div className="grid grid-cols-3 gap-10">
					{founders.map(founder => (
						<Person person={founder} />
					))}
				</div>
			</div>
		</section>
	)
}

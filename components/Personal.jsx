import { useTranslation } from 'react-i18next'
import { personal } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'

export const Personal = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-[var(--light-gray)] p-14 rounded-3xl mb-6">
			<div>
				<Heading tag={'h2'} classNames={'text-center py-14'}>
					{t('team:personal')}
				</Heading>
				<div className="grid grid-cols-3 gap-10">
					{personal.map(person => (
						<Person person={person} />
					))}
				</div>
			</div>
		</section>
	)
}

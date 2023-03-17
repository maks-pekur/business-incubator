import { useTranslation } from 'react-i18next'
import { personal } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'

export const Personal = () => {
	const { t } = useTranslation()
	return (
		<section className="rounded-t-3xl bg-black pb-20 sticky">
			<div className="bg-[var(--light-gray)] p-6 md:p-20 rounded-3xl">
				<Heading tag={'h3'} classNames={'text-center py-14'}>
					{t('team:personal')}
				</Heading>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
					{personal.map(person => (
						<Person key={person.id} person={person} />
					))}
				</div>
			</div>
		</section>
	)
}

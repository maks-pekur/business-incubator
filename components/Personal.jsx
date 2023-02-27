import { personal } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'

export const Personal = () => {
	return (
		<section className="bg-[var(--light-gray)] p-14 rounded-3xl">
			<div>
				<Heading tag={'h2'} classNames={'text-center py-14'}>
					Наша Команда
				</Heading>
				<div className="grid grid-cols-3 gap-10">
					{personal.map(founder => (
						<Person person={founder} />
					))}
				</div>
			</div>
		</section>
	)
}

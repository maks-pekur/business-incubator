import React from 'react'
import { founders } from '../constants'
import { Person } from './Person'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const Founders = () => {
	return (
		<section className="bg-white p-14 rounded-3xl">
			<div>
				<div>
					<NumSection number={'01'} title={'Команда'} variant={'green'} />
				</div>
				<div className="flex justify-end w-full">
					<div className="max-w-[50%] space-y-6">
						<Heading tag={'h2'}>Познакомься с нашей командой!</Heading>
						<p>
							За каждым успешным проектом стоят сильные специалисты. Каждый из
							нас ежедневно трудиться для того, чтобы твой предпринимательский
							путь был легким, понятным и безопасным.
						</p>
					</div>
				</div>

				<Heading tag={'h2'} classNames={'text-center py-20'}>
					Co-Founders
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

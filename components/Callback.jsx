import { Button } from './ui/Button'
import { Heading } from './ui/Heading'

export const Callback = () => {
	return (
		<section className="bg-white p-2">
			<div className="bg-[var(--green)] p-20 flex flex-col items-center justify-center w-full h-full space-y-10">
				<Heading tag={'h2'}>Бесплатная консультация</Heading>
				<Button
					variant={'black'}
					title={'Присоединиться'}
					iconColor={'white'}
				/>
			</div>
		</section>
	)
}

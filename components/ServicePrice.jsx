import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import cub from '../public/assets/images/cub.svg'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const ServicePrice = () => {
	const { t } = useTranslation()
	return (
		<section className=" h-screen sticky top-0 bg-black rounded-t-3xl">
			<div className="h-full bg-[var(--dark-gray)] rounded-3xl p-6 md:p-20">
				<div className="mb-10">
					<NumSection
						number={'02'}
						title={t('services:02.section')}
						variant={'green'}
						classNames={'text-white'}
					/>
				</div>
				<div className="grid md:grid-cols-2 gap-10 md:gap-20 text-white">
					<div className="space-y-10 lg:space-y-14">
						<Heading tag={'h2'}>{t('services:02.title')}</Heading>
						<p className="md:text-xl lg:text-2xl">
							{t('services:02.subtitle')}
						</p>
					</div>
					<div className="xl:px-32 xl:pb-32 2xl:px-48 2xl:pb-48">
						<div className="border-2 border-white h-full rounded-3xl flex flex-col justify-between">
							<div className="p-6 md:p-10 space-y-6">
								<Heading tag={'h4'} classNames={'text-center'}>
									{t('services:02.card.title')}
								</Heading>
								<div className="flex items-center justify-center w-full">
									<Image src={cub} width={150} height={150} alt="" />
								</div>
							</div>
							<Link
								to="consultation"
								className="cursor-pointer bg-[var(--green)] w-full text-black text-2xl rounded-2xl text-center p-6 md:p-6 md:text-4xl"
							>
								{t('services:02.card.btn')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

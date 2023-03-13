import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

import { useRouter } from 'next/router'
import { serviceForWhoItems } from '../constants/index'

export const ForWhom = () => {
	const { t } = useTranslation()
	const { locale } = useRouter()
	return (
		<section className="bg-black pb-6 sticky -top-[160%]">
			<div className="bg-white md:p-20 p-6 rounded-3xl">
				<div className="mb-6 md:mb-0">
					<NumSection
						number={'04'}
						title={t('services:04.section')}
						variant={'green'}
					/>
				</div>
				<div className="flex items-center justify-end w-full">
					<div className="space-y-6 lg:space-y-10 md:max-w-[50%] mb-10 lg:mb-20">
						<Heading tag={'h2'}>{t('services:04.title')}</Heading>
						<p className="text-gray-700 text-sm lg:text-xl leading-10">
							{t('services:04.text')}
						</p>
					</div>
				</div>
				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
					{serviceForWhoItems.map(card => (
						<div
							key={card.id}
							className="bg-[var(--light-gray)] rounded-3xl p-4 md:p-10"
						>
							<div className="mb-6 md:mb-10 h-[200px] flex items-center justify-center">
								<Image src={card.img} width={200} height={200} alt="" />
							</div>
							<div className="w-full flex items-center justify-center md:justify-start">
								<ul>
									{card.list.map(item => (
										<li
											className="mb-4 md:mb-4 relative flex items-center"
											key={item}
										>
											<div className="bg-[var(--green)] w-4 h-4 rounded-full mr-6"></div>
											{t(`services:04.${item}`)}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

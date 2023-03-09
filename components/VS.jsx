import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { vsItems } from '../constants'
import { NumSection } from './ui/NumSection'
import { VSRow } from './ui/VSRow'

export const VS = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-black rounded-t-3xl pb-10 sticky -top-52 lg:top-0  md:-top-44 overflow-x-hidden">
			<div className="bg-[var(--dark-gray)] py-10 rounded-3xl">
				<div className="mb-10 md:mb-0 md:px-20 p-10">
					<NumSection number={'04'} title={''} variant={'green'} />
				</div>
				<div>
					<div className="px-20">
						<div className="flex flex-col items-center">
							<div className="flex items-center text-white mb-10">
								<div>{t('home:04.title.text1')}</div>
								<div>
									<Image
										src={'/assets/images/vs.svg'}
										width={100}
										height={100}
									/>
								</div>
								<div>{t('home:04.title.text2')}</div>
							</div>
						</div>
					</div>
					<div className="w-full mb-6">
						{vsItems.map(({ id, textLeft, textCenter, textRight }, idx) => (
							<VSRow
								key={id}
								textLeft={t(`home:04.row${idx + 1}.${textLeft}`)}
								textCenter={t(`home:04.row${idx + 1}.${textCenter}`)}
								textRight={t(`home:04.row${idx + 1}.${textRight}`)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

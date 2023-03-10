import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const ServiceWhatYouGet = () => {
	const { t } = useTranslation()
	return (
		<section className="pb-6 sticky bg-black text-white">
			<div className="bg-[var(--dark-gray)] rounded-3xl md:p-14 p-6  ">
				<div className="mb-6 md:mb-0">
					<NumSection
						number={'05'}
						title={t('services:05.section')}
						variant={'green'}
						classNames={'text-white'}
					/>
				</div>
				<div className="text-white flex justify-end">
					<div className="md:w-[70%]">
						<div className="mb-10">
							<Heading tag={'h2'}>{t('services:05.title')}</Heading>
						</div>
						<div className="flex flex-col items-start space-y-3">
							{[...Array(8)].map((item, idx) => (
								<div className="border-b-[1px] w-full">
									<Disclosure as="div">
										{({ open }) => (
											<>
												<Disclosure.Button className="w-full text-start py-3 md:text-2xl flex items-center justify-between">
													{t(`services:05.questions.${idx + 1}.q`)}
													<ChevronRightIcon
														className={open && 'rotate-90 transform'}
														width={24}
														height={24}
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="py-8">
													{t(`services:05.questions.${idx + 1}.a`)}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

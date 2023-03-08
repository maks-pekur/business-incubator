import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Heading } from './ui/Heading'

export const WhyPayMore = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-[var(--dark-gray)] rounded-3xl px-10 md:px-20 md:py-10 sticky top-0 h-[150vh] ">
			<div className="text-white">
				<div className=" text-center pt-14 pb-20">
					<Heading tag={'h3'}>{t('home:05.title')}</Heading>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-end gap-10 text-4xl mb-10">
					<div className="w-full h-[250px] md:h-[450px] border-[1px] border-white rounded-3xl relative overflow-hidden">
						<span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white font-bold text-4xl md:text-5xl whitespace-nowrap">
							{t('home:05.count1')}
						</span>
						<motion.div
							initial={{ y: '100%' }}
							whileInView={{ y: 0 }}
							transition={{ duration: 1.5 }}
							className="w-full h-full bg-red-400 opacity-30 flex items-center justify-center"
						></motion.div>
					</div>
					<div className="w-full border-[1px] bg-[var(--green)] text-black border-white rounded-3xl md:text-5xl flex items-center justify-center p-8 md:p-20 whitespace-nowrap">
						{t('home:05.count2')}
					</div>
				</div>
			</div>
		</section>
	)
}

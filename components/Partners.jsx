import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { Heading } from '../components/ui/Heading'

const partners = [
	{
		id: '01',
		image: '/partner1.png',
	},
	{
		id: '02',
		image: '/partner2.png',
	},
	{
		id: '03',
		image: '/partner3.png',
	},
	{
		id: '04',
		image: '/partner4.png',
	},
	{
		id: '05',
		image: '/partner5.png',
	},
	{
		id: '06',
		image: '/partner6.png',
	},
	{
		id: '07',
		image: '/partner7.png',
	},
]

export const Partners = () => {
	const { t } = useTranslation()
	return (
		<section className="hidden w-full lg:flex flex-col items-center space-y-8">
			<Heading tag={'h2'}>{t('contact:partners')}</Heading>
			<div className="flex">
				{partners.map(({ id, image }) => (
					<div key={id} className="p-6 items-center flex">
						<Image
							src={`/assets/images${image}`}
							width={150}
							height={150}
							alt="partner"
						/>
					</div>
				))}
			</div>
		</section>
	)
}

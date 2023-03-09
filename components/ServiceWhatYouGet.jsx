import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

const items = [
	{
		id: '01',
		question: 'Релокейт в Польшу для DIGITAL, IT специалистов и фрилансеров',
		answer:
			'Мы предоставляем все необходимые документы для получения визы PBH и даём возможность переехать в Польшу со своей семьей. Через созданную нами виртуальную фирму ты сможешь работать с местными и заграничными клиентами напрямую, через платформы или B2B. Также наш фонд предоставляет возможность выставления одного общего инвойса на фирму вместо отдельных фактур для оплаты от каждого клиента. Мы также занимаемся легализацией в Польше и с радостью поможем Тебе решить любой вопрос касающийся легального пребывания в РП.',
	},
	{
		id: '02',
		question: 'Пользование юридическим лицом Фонда',
		answer:
			'У тебя появляется возможность официального ведения бизнеса без необходимости регистрации его в административных органах и внесения оплат в Фонд Социального Страхования (ZUS).',
	},
	{
		id: '03',
		question: 'Юридические консультации',
		answer:
			'Касающиеся ведения твоей деятельности: Создание и верификация договоров и других документов, заключаемых между Тобой и клиентами.',
	},
	{
		id: '04',
		question: 'Бухгалтерское и налоговое обслуживание',
		answer:
			'Наш фонд займется полным ведением бухгалтерской и финансовой документации.',
	},
	{
		id: '05',
		question: 'Банковский счет',
		answer:
			'Ты также получишь доступ к банковскому суб-счету в злотых и в валюте для финансовых операций твоего бизнеса.',
	},
	{
		id: '06',
		question: 'Доступ к системе CRM',
		answer:
			'Каждый бенефициар получает доступ к личному кабинету в системе СRМ. Данная система даст Тебе возможность выставлять инвойсы и создавать всю необходимую документацию для вывода денежных средств из суб-счета.',
	},
	{
		id: '07',
		question: 'Архивизация документов',
		answer:
			'Фонд полностью избавляет Тебя от лишней бюрократии. Тебе не нужно печатать документы, отчеты и физически доносить их в наш офис либо высылать почтой или курьером. Все необходимые документы для реализации выплаты денежных средств Ты сможешь подписать электронной подписью и выслать на электорнный адрес своего координатора.',
	},
	{
		id: '08',
		question: 'Менторство менеджера',
		answer:
			'Все текущие вопросы ты сможешь консультировать в онлайн режиме со своим менеджером. Тебе не нужно будет писать мейлы и ждать на них ответы 24 часа, мы работаем оперативно и в удобном для тебя формате.',
	},
]

export const ServiceWhatYouGet = () => {
	const { t } = useTranslation()
	return (
		<section className="pb-6 sticky bg-black text-white">
			<div className="bg-[var(--dark-gray)] rounded-3xl md:p-14 p-6  ">
				<div className="mb-6 md:mb-0">
					<NumSection
						number={'05'}
						title={'Что ты получишь'}
						variant={'green'}
						classNames={'text-white'}
					/>
				</div>
				<div className="text-white flex justify-end">
					<div className="md:w-[70%]">
						<div className="mb-10">
							<Heading tag={'h2'}>
								А теперь подробнее, что ты получишь присоединившись к фонду:
							</Heading>
						</div>
						<div className="flex flex-col items-start space-y-3">
							{items.map(item => (
								<div className="border-b-[1px] w-full">
									<Disclosure as="div">
										{({ open }) => (
											<>
												<Disclosure.Button className="w-full text-start py-3 md:text-2xl flex items-center justify-between">
													{item.question}
													<ChevronRightIcon
														className={open && 'rotate-90 transform'}
														width={24}
														height={24}
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="py-8">
													{item.answer}
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

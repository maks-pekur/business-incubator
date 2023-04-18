import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import { ToastContainer, toast } from 'react-toastify'
import { consultation } from '../../translations/consultation'
import { Button } from './Button'

import Link from 'next/link'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'

const style = {
	input:
		'w-full border-b-[1px] border-black py-3 bg-transparent outline-none placeholder:text-black',
	label: 'text-[10px] lg:text-lg',
}

const chcekboxText = {
	text: {
		ru: 'Я согласен получать от фонда Freedom Business Area с юридическим адресом в Радоме, в электронном виде, на указанный мной адрес электронной почты, или по телефону, коммерческую информацию об услугах, предлагаемых фондом Freedom Business Area с юридическим адресом в Радоме. Мне известно, что я могу отозвать свое согласие в любое время. Информацию об обработке персональных данных Фондом Freedom Business Area с юридическим адресом в Радоме можно найти в разделе',

		uk: 'Я погоджуюся отримувати від Фундації Freedom Business Area, що базується у Радомі в електронному вигляді на вказану мною електронну адресу або по телефону комерційну інформацію, що стосується послуг, пропонованих Фундацією Freedom Business Area, що базується у Радомі. Мені відомо, що я можу в будь-який момент відкликати свою згоду. Інформацію про обробку персональних даних Фундацією Freedom Business Area, що базується у Радомі можна знайти в',

		pl: 'Wyrażam zgodę na otrzymywanie od Fundacji Freedom Business Area z siedzibą w Radomiu drogą elektroniczną, na wskazany przeze mnie adres e-mail lub telefonicznie informacji handlowych dotyczących oferowanych przez Fundację Freedom Business z siedzibą w Radomiu usług. Jestem świadomy/a, że w każdej chwili mogę wycofać swoją zgodę. Informacje na temat przetwarzania danych osobowych przez Fundację Freedom Business z siedzibą w Radomiu znajdują się w',

		en: 'I agree to receive from the Freedom Business Area Foundation based in Radom electronically, at the e-mail address I have indicated, or by telephone, commercial information concerning the services offered by the Freedom Business Area Foundation based in Radom. I am aware that I may withdraw my consent at any time. Information on the processing of personal data by Freedom Business Foundation based in Radom can be found in the',
	},
	link: {
		ru: 'Политика конфиденциальности.',
		uk: 'Політика конфіденційності.',
		pl: 'Polityce Prywatności.',
		en: 'Privacy Policy.',
	},
}

const toastText = {
	uk: '👋 Ваша заявка відправлена',
	pl: '👋 Twój wniosek został wysłany',
	en: '👋 Your request has been sent',
	ru: '👋 Ваша заявка отправлена',
}

const toastErrorText = {
	uk: '👋 Упс! Дані не відправлено',
	pl: '👋 Error',
	en: '👋 Error',
	ru: '👋 Упс! Данные не отправлены',
}

export const ContactForm = () => {
	const { locale } = useRouter()
	const [isLoading, setLoading] = useState(false)

	const notify = () => {
		toast.success(toastText[locale], {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	const notifyError = () => {
		toast.error(toastErrorText[locale], {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
		reset,
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			telegram: '',
			comments: '',
			checkbox: false,
		},
	})

	const onSubmit = async ({ name, email, phone, telegram, comments }) => {
		try {
			setLoading(true)
			const queryUrl = `${process.env.NEXT_PUBLIC_BITRIX_URL}/crm.lead.add.json`

			const queryData = {
				fields: {
					TITLE: 'Заявка с сайта Business Incubator',
					NAME: name,
					OPENED: 'Y',
					ASSIGNED_BY_ID: '1',
					SOURCE_ID: '2',
					STATUS_ID: 'NEW',
					UF_CRM_1672946310750: '83',
					EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
					PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
					COMMENTS: comments,
					IM: [{ VALUE: telegram, VALUE_TYPE: 'TELEGRAM' }],
				},
				params: { REGISTER_SONET_EVENT: 'Y' },
			}
			await fetch(queryUrl, {
				method: 'POST',
				body: JSON.stringify(queryData),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			setLoading(false)
			reset()
			notify()
		} catch (error) {
			setLoading(false)
			console.log(error)
			notifyError()
		}
	}

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-10 flex flex-col md:items-center mb-20">
				<div className="w-full">
					<label htmlFor="name" className={`${style.label} sr-only`}>
						Full name
					</label>
					<input
						className={`${style.input} ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={consultation.name[locale]}
						type="text"
						{...register('name', {
							required: true,
						})}
					/>
				</div>

				<div className="w-full">
					<Controller
						control={control}
						name="phone"
						rules={{ required: true }}
						render={({ field: { ref, ...field } }) => (
							<>
								<label htmlFor="phone" className={`${style.label} sr-only`}>
									Your phone number
								</label>
								<PhoneInput
									{...field}
									inputExtraProps={{
										ref,
										required: true,
										autoFocus: true,
									}}
									country="pl"
									onlyCountries={['pl', 'ua', 'by']}
									inputStyle={{
										width: '100%',
										borderBottom: '1px solid var(--dark-gray)',
										background: 'transparent',
										padding: '22px 48px',
									}}
									buttonStyle={{
										borderBottom: '1px solid var(--dark-gray)',
										background: 'transparent',
										border: 'none',
									}}
									dropdownStyle={{
										width: '300px',
										marginTop: '4px',
										outline: 'none',
										padding: '10px',
										borderRadius: '10px',
										boxShadow:
											'0px 4px 40px rgba(0, 0, 0, 0.25), 0px 16px 40px rgba(33, 33, 33, 0.16)',
									}}
								/>
							</>
						)}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="email" className={`${style.label} sr-only`}>
						Email address
					</label>
					<input
						className={`${style.input} ${
							errors.email?.type === 'required' && 'border-red-400'
						}`}
						placeholder={consultation.email[locale]}
						type="email"
						{...register('email', {
							required: true,
						})}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="telegram" className={`${style.label} sr-only`}>
						Ваш ник
					</label>
					<input
						className={`${style.input} ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={consultation.nik[locale]}
						type="text"
						name="telegram"
						{...register('telegram')}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="message" className={`${style.label} sr-only`}>
						Ваш сообщение
					</label>
					<textarea
						rows="4"
						className={`${style.input} resize-none ${
							errors.comments?.type === 'required' && 'border-red-400'
						}`}
						placeholder={consultation.message[locale]}
						type="text"
						name="comments"
						{...register('comments')}
					/>
				</div>
			</div>
			<div className="w-full mb-10">
				<Controller
					name="checkbox"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<div className="w-full flex space-x-6">
							<input
								{...field}
								type="checkbox"
								className="border-[1px] border-black placeholder:text-gray-500"
							/>
							<label
								htmlFor="checkbox"
								className={`text-gray-500 text-sm ${
									errors.checkbox?.type === 'required' && 'text-red-500'
								}`}
							>
								{chcekboxText.text[locale]}{' '}
								<Link
									className="text-black underline"
									href="/privacy"
									target="_blank"
								>
									{chcekboxText.link[locale]}
								</Link>
							</label>
						</div>
					)}
				/>
			</div>
			<div className="w-full flex justify-center md:justify-end">
				<Button
					isLoading={isLoading}
					title={consultation.btn[locale]}
					variant={'black'}
				/>
			</div>

			<ToastContainer />
		</form>
	)
}

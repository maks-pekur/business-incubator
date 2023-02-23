import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'

import { contactForm } from '../../translations/contactForm'

import 'react-phone-input-2/lib/style.css'
import { Button } from './Button'

export const ContactForm = () => {
	const { locale } = useRouter()
	const [isLoading, setLoading] = useState(false)
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			telegram: '',
		},
	})

	const onSubmit = async ({ name, email, phone, telegram }) => {
		try {
			setLoading(true)
			const queryUrl = `${process.env.NEXT_PUBLIC_BITRIX_URL}/crm.lead.add.json`

			const queryData = {
				fields: {
					TITLE: 'Заявка с сайта Business Incubator',
					NAME: name,
					EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
					PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
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
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-[65%] space-y-10 flex flex-col md:items-center mb-20">
				<div className="w-full">
					<label htmlFor="name" className="sr-only" />
					<input
						className={`w-full border-b-2 border-[var(--dark-gray)] py-3 px-6 bg-transparent outline-none ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={contactForm.name[locale]}
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
							<PhoneInput
								{...field}
								inputExtraProps={{
									ref,
									required: true,
									autoFocus: true,
								}}
								country="pl"
								onlyCountries={['pl', 'ua', 'ru']}
								inputStyle={{
									width: '100%',
									borderBottom: '2px solid var(--dark-gray)',
									background: 'transparent',
									padding: '22px 48px',
								}}
								buttonStyle={{
									borderBottom: '2px solid var(--dark-gray)',
									background: 'transparent',
									border: 'none',
								}}
								dropdownStyle={{
									width: '300px',
									marginTop: '4px',
									outline: 'none',
									padding: '10px',
									boxShadow:
										'0px 4px 40px rgba(0, 0, 0, 0.25), 0px 16px 40px rgba(33, 33, 33, 0.16)',
								}}
							/>
						)}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="email" className="sr-only" />
					<input
						className={`w-full border-b-2 border-[var(--dark-gray)] py-3 px-6 bg-transparent outline-none ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={contactForm.mail[locale]}
						type="email"
						{...register('email', {
							required: true,
						})}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="telegram" className="sr-only" />
					<input
						className={`w-full border-b-2 border-[var(--dark-gray)] py-3 px-6 bg-transparent outline-none ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={contactForm.telegram[locale]}
						type="text"
						name="telegram"
						{...register('telegram', {
							required: true,
						})}
					/>
				</div>
			</div>
			<div className="w-full flex justify-end">
				<Button
					isLoading={isLoading}
					title={'Оставить заявку'}
					variant={'outline'}
				/>
			</div>
		</form>
	)
}

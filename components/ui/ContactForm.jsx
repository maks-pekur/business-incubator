import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'

import { translationContactForm } from '../../translations/contactForm'

import 'react-phone-input-2/lib/style.css'
import { Button } from './Button'

const style = {
	input:
		'w-full border-b-[1px] border-[var(--dark-gray)] py-3 bg-transparent outline-none placeholder:text-black placeholder:opacity-40 ',
	label: 'text-[10px]',
}

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
			<div className="space-y-10 flex flex-col md:items-center mb-20">
				<div className="w-full">
					<label htmlFor="name" className={`${style.label}`}>
						Full name
					</label>
					<input
						className={`${style.input} ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={translationContactForm.name[locale]}
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
								<label htmlFor="phone" className={`${style.label}`}>
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
									onlyCountries={['pl', 'ua', 'ru', 'by']}
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
					<label htmlFor="email" className={`${style.label}`}>
						Email address
					</label>
					<input
						className={`${style.input} ${
							errors.email?.type === 'required' && 'border-red-400'
						}`}
						placeholder={translationContactForm.mail[locale]}
						type="email"
						{...register('email', {
							required: true,
						})}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="telegram" className={`${style.label}`}>
						Ваш ник
					</label>
					<input
						className={`${style.input} ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={translationContactForm.telegram[locale]}
						type="text"
						name="telegram"
						{...register('telegram', {
							required: true,
						})}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="message" className={`${style.label}`}>
						Ваш сообщение
					</label>
					<textarea
						rows="4"
						className={`${style.input} resize-none ${
							errors.name?.type === 'required' && 'border-red-400'
						}`}
						placeholder={translationContactForm.message[locale]}
						type="text"
						name="telegram"
						{...register('telegram', {
							required: true,
						})}
					/>
				</div>
			</div>
			<div className="w-full flex justify-center md:justify-end">
				<Button
					isLoading={isLoading}
					title={'Оставить заявку'}
					variant={'outline'}
				/>
			</div>
		</form>
	)
}

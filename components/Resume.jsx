import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import { sendContactForm } from '../lib/api'
import uploadImg from '../public/assets/images/upload.svg'
import { Button } from './ui/Button'

import 'react-phone-input-2/lib/style.css'

export const Resume = () => {
	const { t } = useTranslation()
	const [isLoading, setLoading] = useState(false)
	const fileInput = useRef()

	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
		getValues,
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
			position: '',
			checkbox: false,
			cv: '',
		},
	})

	const onSubmit = async values => {
		try {
			setLoading(true)
			const formData = new FormData()
			console.log(formData)
			await sendContactForm(values)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<form className="grid md:p-8 w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="grid md:grid-cols-2 gap-6 md:gap-20 mb-10">
				<div className="space-y-8 md:space-y-14">
					<div className="w-full">
						<input
							placeholder={
								errors.name ? 'Please enter your name' : t('career:resume.name')
							}
							type="text"
							{...register('name', {
								required: true,
							})}
							className={`w-full border-b-[1px] border-black py-3 px-6 bg-transparent placeholder:text-gray-500 ${
								errors.name && 'border-[#e7795d]'
							}`}
						/>
					</div>

					<div className="w-full">
						<input
							placeholder={t('career:resume.email')}
							type="email"
							{...register('email', {
								required: 'Email is required.',
								pattern: {
									value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
									message: 'Email is not valid.',
								},
							})}
							className={`w-full border-b-[1px] border-black py-3 px-6 bg-transparent placeholder:text-gray-500 ${
								errors.name && 'border-[#e7795d]'
							}`}
						/>
					</div>
				</div>
				<div className="space-y-10 md:space-y-14">
					<div className="w-full">
						<Controller
							control={control}
							name="phone"
							rules={{ required: true }}
							render={({ field: { ref, ...field } }) => (
								<PhoneInput
									{...field}
									name="phone"
									inputExtraProps={{
										ref,
										required: true,
										autoFocus: true,
									}}
									country="pl"
									onlyCountries={['pl', 'ua', 'ru']}
									inputStyle={{
										width: '100%',
										borderBottom: '1px solid #000',
										padding: '31px 48px',
										backgroundColor: 'transparent',
									}}
									buttonStyle={{
										backgroundColor: 'transparent',
										outline: 'none',
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
						<input
							type="text"
							placeholder={t('career:resume.position')}
							{...register('position', {
								required: true,
							})}
							className={`w-full border-b-[1px] border-black py-3 px-6 bg-transparent placeholder:text-gray-500 ${
								errors.name && 'border-[#e7795d]'
							}`}
						/>
					</div>
				</div>
			</div>

			<div className="w-full mb-10">
				<textarea
					placeholder={t('career:resume.message')}
					type="text"
					name="message"
					{...register('message')}
					className={`w-full border-b-[1px] border-black py-3 px-6 bg-transparent placeholder:text-gray-500 ${
						errors.name && 'border-[#e7795d]'
					}`}
				/>
			</div>

			<div className="w-full flex items-center mb-10">
				<label
					htmlFor="cv"
					onClick={() => fileInput.current.click()}
					className="cursor-pointer flex items-center space-x-4"
				>
					<Image src={uploadImg} width={40} height={40} alt="upload" />
					<span className="text-gray-500">{t('career:resume.upload')}</span>
				</label>
				<Controller
					control={control}
					name="cv"
					render={({
						field: { onChange, onBlur, value, name, ref },
						formState,
					}) => (
						<input
							className="hidden"
							type="file"
							onChange={onChange}
							onBlur={onBlur}
							name={name}
							ref={fileInput}
							value={value}
						/>
					)}
				/>
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
							<label htmlFor="checkbox" className="text-gray-500">
								{t('career:resume.policy')}
							</label>
						</div>
					)}
				/>
			</div>
			<div className="flex justify-center md:justify-end w-full">
				<Button
					variant={'outline'}
					title={t('career:resume.btn')}
					isLoading={isLoading}
				/>
			</div>
		</form>
	)
}

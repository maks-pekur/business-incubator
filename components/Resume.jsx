import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

import { Form, Formik } from 'formik'
import { useTranslation } from 'next-i18next'
import PhoneInput from 'react-phone-input-2'
import { toast, ToastContainer } from 'react-toastify'
import * as Yup from 'yup'
import { Button } from './ui/Button'

import uploadImg from '../public/assets/images/upload.svg'

import 'react-phone-input-2/lib/style.css'

const resumeSchema = Yup.object().shape({
	name: Yup.string().min(2).max(50).required('Required'),
	email: Yup.string().email().required('Required'),
	checkbox: Yup.bool().oneOf([true]),
})

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

export const Resume = () => {
	const { t } = useTranslation()
	const { locale } = useRouter()
	const fileInput = useRef()

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

	const initialData = {
		name: '',
		email: '',
		phone: '',
		message: '',
		position: '',
		careerCV: null,
		checkbox: false,
	}

	const handleSubmit = async (values, { resetForm }) => {
		setLoading(true)

		const formdata = new FormData()

		Object.entries(values).forEach(([key, value]) => {
			formdata.set(key, value)
		})

		try {
			await axios({
				method: 'POST',
				url: '/api/send',
				data: formdata,
			})
			setLoading(false)
			notify()
			resetForm()
		} catch (error) {
			console.error(error)
			notifyError()
			setLoading(false)
		}
	}

	return (
		<>
			<Formik
				enableReinitialize
				initialValues={initialData}
				onSubmit={handleSubmit}
				validationSchema={resumeSchema}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleSubmit,
					handleBlur,
					setFieldValue,
				}) => (
					<Form onSubmit={handleSubmit} className="grid md:p-8 w-full">
						<div className="grid md:grid-cols-2 gap-6 md:gap-20 mb-10">
							<div className="space-y-8 md:space-y-14">
								<div className="w-full">
									<input
										placeholder={t('career:resume.name')}
										type="text"
										name="name"
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										className={`w-full border-b-[1px] py-3 px-6 bg-transparent placeholder:text-gray-500 outline-none ${
											errors.name && touched.name
												? 'border-[#e7795d]'
												: 'border-black'
										}`}
									/>
								</div>

								<div className="w-full">
									<input
										placeholder={t('career:resume.email')}
										type="email"
										name="email"
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										className={`w-full border-b-[1px] py-3 px-6 bg-transparent placeholder:text-gray-500 outline-none ${
											errors.email && touched.email
												? 'border-[#e7795d]'
												: 'border-black '
										}`}
									/>
								</div>
							</div>
							<div className="space-y-10 md:space-y-14">
								<div className="w-full">
									<PhoneInput
										value={values.phone}
										inputProps={{
											name: 'phone',
											required: true,
											autoFocus: true,
										}}
										onChange={value => {
											values.phone = value
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
								</div>
								<div className="w-full">
									<input
										type="text"
										name="position"
										value={values.position}
										onChange={handleChange}
										placeholder={t('career:resume.position')}
										className={`w-full border-b-[1px] border-black py-3 px-6 bg-transparent placeholder:text-gray-500 outline-none ${
											errors.position && touched.position
												? 'border-[#e7795d]'
												: 'border-black '
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
								value={values.message}
								onChange={handleChange}
								onBlur={handleBlur}
								className={`w-full border-b-[1px] border-black py-3 px-6 bg-transparent placeholder:text-gray-500 outline-none  ${
									errors.message && touched.message
										? 'border-[#e7795d]'
										: 'border-black '
								}`}
							/>
						</div>

						<div className="w-full flex items-center mb-10">
							<label
								htmlFor="careerCV"
								onClick={() => fileInput.current.click()}
								className="cursor-pointer flex items-center space-x-4"
							>
								<Image src={uploadImg} width={40} height={40} alt="upload" />
								<input
									className="hidden"
									type="file"
									name="careerCV"
									ref={fileInput}
									onChange={e =>
										setFieldValue('careerCV', e.currentTarget.files[0])
									}
								/>
								<span className="ml-6">{t('career:resume.upload')}</span>
							</label>
						</div>

						<div className="w-full mb-10">
							<div className="w-full flex space-x-6">
								<input
									name="checkbox"
									type="checkbox"
									value={values.checkbox}
									onChange={handleChange}
									onBlur={handleBlur}
									className="border-[1px] border-black placeholder:text-gray-500"
								/>
								<label
									htmlFor="checkbox"
									className={`${
										errors.checkbox ? 'text-red-500' : 'text-gray-500'
									}`}
								>
									{t('career:resume.policy')}
								</label>
							</div>
						</div>
						<div className="flex justify-center md:justify-end w-full">
							<Button
								variant={'green'}
								title={t('career:resume.btn')}
								isLoading={isLoading}
							/>
						</div>
					</Form>
				)}
			</Formik>
			<ToastContainer />
		</>
	)
}

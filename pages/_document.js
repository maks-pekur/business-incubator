import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		const { language } = this.props.__NEXT_DATA__.query
		return (
			<Html lang={language} className="scrollbar-hide">
				<Head>
					<meta
						http-equiv="Content-Type"
						content="text/html; charset=UTF-8"
					></meta>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta
						name="description"
						content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
					/>
					<meta name="author" content="Pekur Maksym <maxpekur88@gmail.com>" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
						rel="stylesheet"
					/>

					{/* Open Graph Tags */}
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Freedom Business Area" />
					<meta
						property="og:description"
						content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
					/>
					<meta property="og:url" content="https://fba.ink" />
					<meta property="og:site_name" content="Freedom Business Area" />
					<meta property="og:image" content="/code-of-relevancy-logo.png" />
					<meta property="og:image:width" content="200" />
					<meta property="og:image:height" content="200" />
					<meta property="og:locale" content="en" />

					{/* Twitter Tags */}
					<meta name="twitter:title" content="Freedom Business Area" />
					<meta
						name="twitter:description"
						content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
					/>
					<meta name="twitter:image" content="/code-of-relevancy-logo.png" />
					<meta name="twitter:image:alt" content="Freedom Business Area" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@codeofrelevancy" />

					{/* App Favicon */}
					<link rel="shortcut icon" href="/favicon.ico" />
					<link
						rel="shortcut icon"
						sizes="32x32"
						type="image/ico"
						href="/favicon.ico"
					/>
				</Head>
				<body className="bg-black font-extralight scroll-smooth">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

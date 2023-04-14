import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		const { language } = this.props.__NEXT_DATA__.query
		return (
			<Html lang={language} className="scrollbar-hide scroll-smooth">
				<Head>
					<meta
						httpEquiv="Content-Type"
						content="text/html; charset=UTF-8"
					></meta>
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
					{/* App Favicon */}
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body className="bg-black font-extralight">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

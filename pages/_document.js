import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		const { language } = this.props.__NEXT_DATA__.query
		return (
			<Html lang={language} className="scrollbar-hide">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
						rel="stylesheet"
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

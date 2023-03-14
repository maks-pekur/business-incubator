import Head from 'next/head'
import { Hero } from '../../components/Hero'
import { Heading } from '../../components/ui/Heading'

const index = () => {
	return (
		<>
			<Head></Head>
			<Hero />
			<section className="sticky -top-[50vh] bg-black pb-10">
				<div className="bg-white p-20 rounded-3xl">
					<Heading tag={'h2'} classNames={'text-center font-bold mb-10'}>
						Polityka Cookies
					</Heading>
					<p className="mb-6 font-bold">FUNDACJI FREEDOM BUSINESS AREA</p>
					<p>
						<strong>ADMINISTRATOR DANYCH</strong>
					</p>
					<p className="mb-6">
						Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu
						pliki cookies(tzw. „ciasteczka”) oraz uzyskującym do nich dostęp
						jest operator Fundacja Freedom Business Area z siedzibą w Radomiu
						przy ul. Henryka Sienkiewicza nr 36 lok. 5, 26-600 Radom. Ze
						Administratorem możesz kontaktować się za pośrednictwem poczty
						tradycyjnej, telefonicznie +48 881 488 280 lub za pośrednictwem
						poczty elektronicznej: rodo@fba.ink.
					</p>
					<p>
						<strong>PLIKI COOKIES WYKORZYSTYWANE SĄ W CELU:</strong>
					</p>
					<p className="mb-6">
						a) Dostosowania zawartości stron internetowych Serwisu do
						preferencji Użytkownika oraz optymalizacji korzystania ze stron
						internetowych; w szczególności pliki te pozwalają rozpoznać
						urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę
						internetową, dostosowaną do jego indywidualnych potrzeb; <br />
						b) Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób
						Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia
						ulepszanie ich struktury i zawartości; <br />
						c) Utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki
						której Użytkownik nie musi na każdej podstronie Serwisu ponownie
						wpisywać loginu i hasła; <br />W wielu przypadkach oprogramowanie
						służące do przeglądania stron internetowych (przeglądarka
						internetowa) domyślnie dopuszcza przechowywanie plików cookies w
						urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w
						każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia
						te mogą zostać zmienione w szczególności w taki sposób, aby blokować
						automatyczną obsługę plików cookies w ustawieniach przeglądarki
						internetowej bądź informować o ich każdorazowym zamieszczeniu w
						urządzeniu Użytkownika Serwisu.
					</p>
					<p className="mb-6">
						Szczegółowe informacje o możliwości i sposobach obsługi plików
						cookies dostępne są w ustawieniach oprogramowania (przeglądarki
						internetowej) np.:
						<ul>
							<li>– w przeglądarce Internet Explorer</li>
							<li>– w przeglądarce Mozilla Firefox</li>
							<li>– w przeglądarce Chrome</li>
							<li>– w przeglądarce Safari</li>
							<li>– w przeglądarce Opera</li>
						</ul>
					</p>
					<p className="mb-6">
						Operator Serwisu informuje, że ograniczenia stosowania plików
						cookies mogą wpłynąć na niektóre funkcjonalności dostępne na
						stronach internetowych Serwisu. <br /> Pliki cookies zamieszczane w
						urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być
						również przez współpracujących z operatorem partnerów.
					</p>
					<p>
						<strong>KONTAKT Z ADMINISTRATOREM</strong> <br /> Administrator
						udziela odpowiedzi na pytania i wątpliwości dotyczące przetwarzania
						Twoich danych osobowych, a także przyjmuje wszelkie uwagi i
						zastrzeżenia w tym zakresie. Z Administratorem możesz się
						skontaktować telefonicznie +48 881 488 280, za pośrednictwem poczty
						elektronicznej rodo@fba.ink lub za pośrednictwem poczty tradycyjnej.
					</p>
				</div>
			</section>
		</>
	)
}

export default index

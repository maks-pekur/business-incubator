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
					<Heading tag={'h2'} classNames={'text-center'}>
						Polityka Prywatności
					</Heading>
					<div className="text-center font-bold py-6">
						POLITYKA PRYWATNOŚCI FUNDACJI FREEDOM BUSINESS AREA
					</div>
					<p className="text-center my-6">
						<strong>§1 [Informacje ogólne]</strong>
					</p>
					<p>
						Przetwarzanie Twoich danych osobowych odbywa się na podstawie i w
						granicach prawa, w tym w szczególności na podstawie Rozporządzenia
						Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
						2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
						danych osobowych i w sprawie swobodnego przepływu takich danych oraz
						uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
						danych) – dalej: <strong>„Rozporządzenie”</strong>.
					</p>
					<p className="text-center my-6">
						<strong>§2 [Administrator Twoich danych osobowych]</strong>
					</p>
					<p>
						Administratorem twoich danych jest Fundacja Freedom Business Area z
						siedzibą w Radomiu przy ul. Henryka Sienkiewicza nr 36 lok. 5,
						26-600 Radom, wpisaną do rejestru stowarzyszeń, innych organizacji
						społecznych i zawodowych, fundacji oraz samodzielnych zakładów
						opieki zdrowotnej oraz rejestru przedsiębiorców Krajowego Rejestru
						Sądowego prowadzonego przez Sąd Rejonowy Lublin – Wschód w Lublinie
						z siedzibą w Świdniku, VI Wydział Gospodarczy Krajowego Rejestru
						Sądowego pod numerem KRS: 0000962284, NIP: 9482632966, REGON:
						521560632. Ze Administratorem możesz kontaktować się za
						pośrednictwem poczty tradycyjnej, telefonicznie +48 737 308 669 lub
						za pośrednictwem poczty elektronicznej: rodo@fba.ink.{' '}
					</p>
					<p className="text-center my-6">
						<strong>
							§3 [Cele, podstawy prawne i okres przetwarzania danych]
						</strong>{' '}
						<br />
						<strong>INFORMACJA DLA BENEFICJENTÓW I KLIENTÓW</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Twoje dane osobowe przetwarzane będą w celu wykonania zawartej
							z Fundacją umowy na podstawie art. 6 ust. 1 lit. b) RODO, tj. ze
							względu na niezbędność przetwarzania do wykonania umowy. Dane będą
							przechowywane przez okres niezbędny do wykonania umowy.
						</p>
						<p>
							2. Twoje dane osobowe mogą być przetwarzane w celu zapewnienia
							prawidłowości realizacji usług poprzez monitorowanie działań
							beneficjenta na podstawie art. 6 ust. 1 lit f) RODO, tj. ze
							względu na niezbędność przetwarzania do celów wynikających z
							prawnie uzasadnionych interesów realizowanych przez
							Administratora. Dane będą przechowywane do czasu przedawnienia
							roszczeń.
						</p>
						<p>
							3. Po rozwiązaniu lub wygaśnięciu umowy, Twoje dane osobowe mogą
							być przetwarzane w celu dochodzenia, obrony lub ustalenia
							ewentualnych roszczeń wynikających z umowy na podstawie art. 6
							ust. 1 lit f) RODO, tj. ze względu na niezbędność przetwarzania do
							celów wynikających z prawnie uzasadnionych interesów realizowanych
							przez Administratora. Dane będą przechowywane do czasu
							przedawnienia roszczeń.
						</p>
						<p>
							4. Niezależnie od powyższego, Twoje dane osobowe mogą być
							przetwarzane, w tym w szczególności przechowywane, w celu
							wypełnienia przez Administratora ciążących na nim obowiązków
							prawnych, tj. na podstawie art. 6 ust. 1 lit. c) RODO. Dane te
							będą przechowywane przez okres wskazany przepisami prawa.
						</p>
						<p>
							W szczególności - gdy w związku z wykonywaniem umowy na
							Administratorze ciążą obowiązki w zakresie ubezpieczeń społecznych
							i ubezpieczenia zdrowotnego, obowiązki podatkowe lub wynikające z
							ustawy o przeciwdziałaniu praniu pieniędzy i finansowaniu
							terroryzmu, po rozwiązaniu umowy Twoje dane osobowe będą
							przechowywane do wygaśnięcia obowiązku przechowywania dokumentacji
							zawierającej te dane, wynikającego z przepisów prawa podatkowego
							oraz innych przepisów regulujących obowiązki Administratora.
						</p>
					</div>
					<p className="text-center my-6">
						<strong>INFORMACJA DLA KONTRAHENTÓW</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Twoje dane osobowe przetwarzane będą w celu wykonania zawartej
							umowy na podstawie art. 6 ust. 1 lit. b) RODO, tj. ze względu na
							niezbędność przetwarzania do wykonania umowy.
						</p>
						<p>
							2. Po rozwiązaniu lub wygaśnięciu umowy Twoje dane osobowe mogą
							być przetwarzane w celu dochodzenia, obrony lub ustalenia
							ewentualnych roszczeń wynikających z umowy na podstawie art. 6
							ust. 1 lit. f) RODO, tj. ze względu na niezbędność przetwarzania
							do celów wynikających z prawnie uzasadnionych interesów
							realizowanych przez Administratora.
						</p>
						<p>
							3. Niezależnie od powyższego, Twoje dane osobowe będą przetwarzane
							w celu wypełnienia przez Administratora ciążących na nim
							obowiązków prawnych, w tym w szczególności obowiązków o
							charakterze podatkowym, tj. na podstawie art. 6 ust. 1 lit. c)
							RODO.
						</p>
						<p>
							4. Twoje dane osobowe będą przechowywane przez okres niezbędny do
							wykonania umowy, a następnie przez okres niezbędny do ustalenia,
							dochodzenia lub obrony ewentualnych roszczeń, tj. do momentu
							przedawnienia roszczeń wynikających z zawartej umowy, chyba że
							konieczność dalszego przechowywania danych wynika z obowiązków
							prawnych ciążących na Administratorze.{' '}
						</p>
					</div>
					<p className="text-center my-6">
						<strong>
							INFORMACJA DLA PRZEDSTAWICIELI I PERSONELU KONTRAHENTÓW
						</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Twoje dane osobowe przetwarzane będą w celu wykonywania
							zobowiązań i uprawnień Administratora wobec podmiotu, którego
							reprezentujesz lub z którego upoważnienia działasz. Podstawą
							przetwarzania Twoich danych osobowych jest niezbędność
							przetwarzania do celów wynikających z prawnie uzasadnionych
							interesów realizowanych przez Administratora, tj. art. 6 ust. 1
							lit. f) RODO.
						</p>
						<p>
							2. Twoje dane osobowe będą przechowywane przez okres wykonywania
							umowy łączącej Administratora z podmiotem, którego reprezentujesz
							lub z którego upoważnienia działasz. Po zakończeniu współpracy z
							tym podmiotem, Administrator będzie dalej przechowywać Twoje dane
							osobowe, jeżeli przechowywanie dokumentacji zawierającej te dane
							osobowe okaże się niezbędne do ustalenia, dochodzenia lub obrony
							roszczeń wynikających z tej umowy (do czasu przedawnienia tych
							roszczeń), albo do wypełnienia obowiązków prawnych ciążących na
							Administratorze, w tym w szczególności obowiązku przechowywania
							dokumentacji dla celów podatkowych.
						</p>
					</div>
					<p className="text-center my-6">
						<strong>
							INFORMACJA DLA OSÓB WYSYŁAJĄCYCH ZAPYTANIA DO ADMINISTRATORA
						</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Twoje dane osobowe będą przetwarzane w celu udzielenia
							odpowiedzi na pytania zadane drogą elektroniczną lub
							telefonicznie. Podstawą przetwarzania Twoich danych osobowych jest
							niezbędność przetwarzania do celów wynikających z prawnie
							uzasadnionych interesów realizowanych przez Administratora, tj.
							art. 6 ust. 1 lit. f) RODO.
						</p>
						<p>
							2. Twoje dane osobowe będą przechowywane przez okres niezbędny do
							udzielenia odpowiedzi na pytania i czas prowadzenia korespondencji
							oraz ustalenia, dochodzenia lub obrony przed ewentualnymi
							roszczeniami, co jest prawnie uzasadnionym interesem
							administratora(podstawa z art. 6 ust. 1 lit. f RODO). Podanie
							danych jest dobrowolne jednakże konieczne celem nawiązania
							kontaktu i udzielenia odpowiedzi na zadane pytania.
						</p>
					</div>
					<p className="text-center my-6">
						<strong>INFORMACJA DLA UŻYTKOWNIKÓW STRONY INTERNETOWEJ</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Twoje dane osobowe będą przetwarzane w celu zapewnienia
							prawidłowego funkcjonowania Strony internetowej i w celu badania
							poziomu zainteresowania użytkowników treściami prezentowanymi na
							Stronie internetowej (dane statystyczne zbierane przy
							wykorzystaniu plików cookies) – podstawą przetwarzania danych
							osobowych jest prawnie uzasadniony interes realizowany przez
							Administratora, polegający na zapewnieniu prawidłowego
							funkcjonowania Strony internetowej i na badaniu poziomu
							zainteresowania użytkowników treściami prezentowanymi na Stronie
							internetowej, tj. art. 6 ust. 1 lit. f) Rozporządzenia.
						</p>
						<p>
							2. Dodatkowe informacje o zasadach przetwarzania danych
							użytkowników za pośrednictwem cookies, dostępne są w polityce
							cookies.
						</p>
					</div>
					<p className="text-center my-6">
						<strong>§4 [Powierzenie przetwarzania danych osobowych]</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Twoje dane osobowe mogą być powierzone do przetwarzania
							podmiotom współpracującym ze Administratorem na podstawie umów
							powierzenia przetwarzania danych zawartych w trybie art. 28
							Rozporządzenia, w tym podmiotom świadczącym następujące usługi:
							informatyczne, zarządzania tożsamością, hostingu, analizy danych,
							tworzenia kopii zapasowych, bezpieczeństwa, obsługi klientów oraz
							przechowywania danych.
						</p>
						<p>
							2. Twoje dane osobowe są przetwarzane przez osoby upoważnione
							przez Administratorem do przetwarzania danych w trybie art. 29
							Rozporządzenia, w tym w szczególności przez osoby zatrudniane
							przez Administratora.
						</p>
						<p>
							3. Twoje dane mogą być udostępniane zewnętrznym Administratorom
							danych, w tym radcom prawnym i adwokatom i podmiotom prowadzącym
							działalność pocztową.
						</p>
						<p>
							4. Administrator zastrzega sobie prawo ujawnienia wybranych
							informacji dotyczących Ciebie właściwym organom bądź osobom
							trzecim, które zgłoszą żądanie udzielenia takich informacji,
							opierając się na odpowiedniej podstawie prawnej oraz zgodnie z
							przepisami obowiązującego prawa.
						</p>
						<p>
							5. Twoje dane osobowe nie będą przekazywane do państwa trzeciego,
							czyli poza Europejski Obszar Gospodarczy, ani do organizacji
							międzynarodowej.
						</p>
						<p>
							6. Twoje dane nie będą podlegać profilowaniu, czyli
							zautomatyzowanej analizie i opracowaniu przewidywań na temat
							preferencji lub przyszłych zachowań (np. w przypadku profilowania
							marketingowego oznacza to określanie, którą ofertą możesz być
							najbardziej zainteresowana w oparciu o Twoje wcześniejsze wybory).
						</p>
					</div>
					<p className="text-center my-6">
						<strong>§5 [Prawa osób, których dane dotyczą]</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Z uprawnień omówionych poniżej możesz skorzystać poprzez
							skontaktowanie się z Administratorem, według własnego wyboru, za
							pośrednictwem poczty tradycyjnej, poczty elektronicznej lub
							telefonicznie.
						</p>
						<p>
							2. Przysługuje Ci prawo: <br /> a){' '}
							<strong>do informacji o przetwarzaniu danych osobowych</strong> –
							na tej podstawie Administrator przekazuje Ci informację o
							przetwarzaniu danych, w tym o celach i podstawach prawnych
							przetwarzania, zakresie posiadanych danych, podmiotach, którym są
							ujawniane, i planowanym terminie usunięcia danych; <br /> b){' '}
							<strong>uzyskania kopii danych</strong>
							– na tej podstawie Administrator przekazuje Ci kopię
							przetwarzanych danych dotyczących osoby fizycznej zgłaszającej
							żądanie; <br /> c) <strong>do sprostowania danych</strong> –
							Administrator usuwa ewentualne niezgodności lub błędy
							przetwarzanych Danych osobowych oraz uzupełnia je, jeśli są
							niekompletne; <br /> d) <strong>do usunięcia danych</strong> – na
							tej podstawie możesz żądać usunięcia danych, których przetwarzanie
							nie jest już niezbędne do realizowania żadnego z celów, dla
							których zostały zebrane; <br /> e)
							<strong>do ograniczenia przetwarzania</strong> – w razie
							zgłoszenia takiego żądania Administrator zaprzestaje wykonywania
							operacji na Danych osobowych – z wyjątkiem operacji, na które
							wyraziła zgodę osoba, której dane dotyczą – oraz ich
							przechowywania, zgodnie z przyjętymi zasadami retencji lub dopóki
							nie ustaną przyczyny ograniczenia przetwarzania danych (np.
							zostanie wydana decyzja organu nadzorczego zezwalająca na dalsze
							przetwarzanie danych); <br /> f)
							<strong>do przenoszenia danych</strong> – na tej podstawie – w
							zakresie, w jakim dane są przetwarzane w sposób zautomatyzowany w
							związku z zawartą umową lub wyrażoną zgodą – Administrator wydaje
							dane dostarczone przez osobę, której one dotyczą, w formacie
							pozwalającym na odczyt danych przez komputer. Możliwe jest także
							zażądanie przesłania tych danych innemu podmiotowi, jednakże pod
							warunkiem, że istnieją w tym zakresie techniczne możliwości
							zarówno po stronie Administratora, jak również wskazanego
							podmiotu; <br /> g)
							<strong>
								sprzeciwu wobec przetwarzania danych w celach marketingowych
							</strong>{' '}
							– możesz w każdym momencie sprzeciwić się przetwarzaniu Danych
							osobowych w celach marketingowych, bez konieczności uzasadnienia
							takiego sprzeciwu;
							<br /> h){' '}
							<strong>
								sprzeciwu wobec innych celów przetwarzania danych
							</strong>{' '}
							– możesz w każdym momencie sprzeciwić się, z przyczyn związanych z
							Twoją szczególną sytuacją, przetwarzaniu Danych osobowych, które
							odbywa się na podstawie prawnie uzasadnionego interesu
							Administratora, sprzeciw w tym zakresie powinien zawierać
							uzasadnienie; <br /> i)<strong>wycofania zgody</strong> – jeśli
							Twoje dane przetwarzane są na podstawie wyrażonej zgody, Podmiot
							danych ma prawo wycofać ją w dowolnym momencie, co jednak nie
							wpływa na zgodność z prawem przetwarzania dokonanego przed jej
							wycofaniem; 2. Administrator informuje, że nie podejmują decyzji
							opierających się wyłącznie na zautomatyzowanym przetwarzaniu, w
							tym profilowaniu.
						</p>
					</div>
					<p className="text-center my-6">
						<strong>§6 [Prawo złożenia skargi do organu nadzorczego]</strong>
					</p>
					<div className="space-y-4 mb-6">
						<p>
							1. Przysługuje Ci prawo złożenia skargi do organu nadzorczego,
							jeżeli w Twojej ocenie przetwarzanie Twoich danych następuje z
							naruszeniem przepisów prawa.
						</p>
						<p>
							2. Organem właściwym do zgłaszania naruszeń ochrony danych
							osobowych jest Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki
							2, 00-193 Warszawa, www.udo.gov.pl.
						</p>
					</div>
					<p className="text-center my-6">
						<strong>§7 [Kontakt z Administratorem]</strong>
					</p>
					Administrator udziela odpowiedzi na pytania i wątpliwości dotyczące
					przetwarzania Twoich danych osobowych, a także przyjmuje wszelkie
					uwagi i zastrzeżenia w tym zakresie. Z Administratorem możesz się
					skontaktować telefonicznie +48 737 308 669, za pośrednictwem poczty
					elektronicznej rodo@fba.ink lub za pośrednictwem poczty tradycyjnej.
				</div>
			</section>
		</>
	)
}

export default index

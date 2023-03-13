import Link from 'next/link'

const SocialLinks = ({
	height = 30,
	width = 30,
	className = '',
	fill = 'none',
}) => {
	return (
		<div className={`flex items-end space-x-2 ${className}`}>
			<Link href="https://www.facebook.com/profile.php?id=100088003327265">
				<svg
					width={width}
					height={height}
					viewBox="0 0 43 43"
					fill={fill}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18.1167 15.8262V18.3592H16.3506V21.455H18.1167V30.6578H21.7471V21.455H24.1826C24.1826 21.455 24.4121 19.9705 24.5225 18.3463H21.7611V16.2309C21.7611 15.9127 22.1571 15.4878 22.5496 15.4878H24.526V12.2632H21.8365C18.0274 12.2632 18.1167 15.3627 18.1167 15.8262Z"
						fill={fill}
					/>
					<mask id="path-2-inside-1_154_16" fill="white">
						<path d="M21.4604 38.6287C26.0137 38.6287 30.3805 36.8199 33.6002 33.6002C36.8199 30.3805 38.6287 26.0137 38.6287 21.4604C38.6287 16.9071 36.8199 12.5402 33.6002 9.32055C30.3805 6.10087 26.0137 4.29207 21.4604 4.29207C16.9071 4.29207 12.5402 6.10087 9.32055 9.32055C6.10087 12.5402 4.29207 16.9071 4.29207 21.4604C4.29207 26.0137 6.10087 30.3805 9.32055 33.6002C12.5402 36.8199 16.9071 38.6287 21.4604 38.6287ZM21.4604 42.9207C9.60781 42.9207 0 33.3129 0 21.4604C0 9.60781 9.60781 0 21.4604 0C33.3129 0 42.9207 9.60781 42.9207 21.4604C42.9207 33.3129 33.3129 42.9207 21.4604 42.9207Z" />
					</mask>
					<path
						d="M21.4604 38.6287V44.6287V38.6287ZM38.6287 21.4604H44.6287H38.6287ZM21.4604 4.29207V-1.70793V4.29207ZM4.29207 21.4604H-1.70793H4.29207ZM21.4604 44.6287C27.605 44.6287 33.4979 42.1877 37.8428 37.8428L29.3575 29.3575C27.2631 31.452 24.4224 32.6287 21.4604 32.6287V44.6287ZM37.8428 37.8428C42.1877 33.4979 44.6287 27.605 44.6287 21.4604H32.6287C32.6287 24.4224 31.452 27.2631 29.3575 29.3575L37.8428 37.8428ZM44.6287 21.4604C44.6287 15.3158 42.1877 9.42281 37.8428 5.07791L29.3575 13.5632C31.452 15.6577 32.6287 18.4984 32.6287 21.4604H44.6287ZM37.8428 5.07791C33.4979 0.733013 27.605 -1.70793 21.4604 -1.70793V10.2921C24.4224 10.2921 27.2631 11.4687 29.3575 13.5632L37.8428 5.07791ZM21.4604 -1.70793C15.3158 -1.70793 9.42281 0.733013 5.07791 5.07791L13.5632 13.5632C15.6577 11.4687 18.4984 10.2921 21.4604 10.2921V-1.70793ZM5.07791 5.07791C0.733013 9.42281 -1.70793 15.3158 -1.70793 21.4604H10.2921C10.2921 18.4984 11.4687 15.6577 13.5632 13.5632L5.07791 5.07791ZM-1.70793 21.4604C-1.70793 27.605 0.733013 33.4979 5.07791 37.8428L13.5632 29.3575C11.4687 27.2631 10.2921 24.4224 10.2921 21.4604H-1.70793ZM5.07791 37.8428C9.42281 42.1877 15.3158 44.6287 21.4604 44.6287V32.6287C18.4984 32.6287 15.6577 31.452 13.5632 29.3575L5.07791 37.8428ZM21.4604 36.9207C12.9215 36.9207 6 29.9992 6 21.4604H-6C-6 36.6266 6.2941 48.9207 21.4604 48.9207V36.9207ZM6 21.4604C6 12.9215 12.9215 6 21.4604 6V-6C6.2941 -6 -6 6.2941 -6 21.4604H6ZM21.4604 6C29.9992 6 36.9207 12.9215 36.9207 21.4604H48.9207C48.9207 6.2941 36.6266 -6 21.4604 -6V6ZM36.9207 21.4604C36.9207 29.9992 29.9992 36.9207 21.4604 36.9207V48.9207C36.6266 48.9207 48.9207 36.6266 48.9207 21.4604H36.9207Z"
						fill={fill}
						mask="url(#path-2-inside-1_154_16)"
					/>
				</svg>
			</Link>
			<Link href="https://instagram.com/fba.ink.official?igshid=YmMyMTA2M2Y=">
				<svg
					width={width}
					height={height}
					viewBox="0 0 43 43"
					fill={fill}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.6 40.1287C26.5512 40.1287 31.2995 38.1618 34.8005 34.6609C38.3015 31.1599 40.2683 26.4115 40.2683 21.4604C40.2683 16.5092 38.3015 11.7609 34.8005 8.25989C31.2995 4.75891 26.5512 2.79207 21.6 2.79207C16.6489 2.79207 11.9005 4.75891 8.39954 8.25989C4.89856 11.7609 2.93172 16.5092 2.93172 21.4604C2.93172 26.4115 4.89856 31.1599 8.39954 34.6609C11.9005 38.1618 16.6489 40.1287 21.6 40.1287ZM21.6 41.4207C10.5759 41.4207 1.63965 32.4845 1.63965 21.4604C1.63965 10.4362 10.5759 1.5 21.6 1.5C32.6242 1.5 41.5604 10.4362 41.5604 21.4604C41.5604 32.4845 32.6242 41.4207 21.6 41.4207Z"
						stroke={fill}
						strokeWidth="3"
					/>
					<path
						d="M21.6006 17.1434C20.7468 17.1434 19.9121 17.3966 19.2022 17.8709C18.4922 18.3453 17.9389 19.0196 17.6121 19.8084C17.2854 20.5972 17.1999 21.4653 17.3665 22.3027C17.533 23.1401 17.9442 23.9094 18.548 24.5131C19.1517 25.1169 19.921 25.5281 20.7584 25.6946C21.5958 25.8612 22.4639 25.7757 23.2527 25.449C24.0416 25.1222 24.7158 24.5689 25.1902 23.8589C25.6645 23.149 25.9177 22.3143 25.9177 21.4605C25.9177 20.3155 25.4629 19.2174 24.6533 18.4078C23.8437 17.5982 22.7456 17.1434 21.6006 17.1434ZM21.6006 24.6514C20.9695 24.6514 20.3526 24.4642 19.8279 24.1136C19.3031 23.763 18.8941 23.2647 18.6526 22.6816C18.4111 22.0985 18.3479 21.4569 18.471 20.838C18.5942 20.219 18.8981 19.6504 19.3443 19.2042C19.7906 18.7579 20.3591 18.454 20.9781 18.3309C21.5971 18.2078 22.2387 18.271 22.8217 18.5125C23.4048 18.754 23.9031 19.163 24.2538 19.6877C24.6044 20.2125 24.7915 20.8294 24.7915 21.4605C24.789 22.306 24.4521 23.1162 23.8542 23.7141C23.2563 24.3119 22.4461 24.6489 21.6006 24.6514ZM25.73 12.2632H17.4712C16.1271 12.2632 14.8381 12.7971 13.8877 13.7475C12.9373 14.698 12.4033 15.987 12.4033 17.3311V25.5899C12.4033 26.934 12.9373 28.223 13.8877 29.1734C14.8381 30.1238 16.1271 30.6578 17.4712 30.6578H25.73C27.0741 30.6578 28.3632 30.1238 29.3136 29.1734C30.264 28.223 30.7979 26.934 30.7979 25.5899V17.3311C30.7979 15.987 30.264 14.698 29.3136 13.7475C28.3632 12.7971 27.0741 12.2632 25.73 12.2632ZM29.6717 25.5899C29.6717 26.6353 29.2564 27.6379 28.5172 28.3771C27.778 29.1163 26.7754 29.5316 25.73 29.5316H17.4712C16.4258 29.5316 15.4232 29.1163 14.684 28.3771C13.9448 27.6379 13.5295 26.6353 13.5295 25.5899V17.3311C13.5295 16.2857 13.9448 15.2831 14.684 14.5439C15.4232 13.8047 16.4258 13.3894 17.4712 13.3894H25.73C26.7754 13.3894 27.778 13.8047 28.5172 14.5439C29.2564 15.2831 29.6717 16.2857 29.6717 17.3311V25.5899ZM27.4193 16.5803C27.4193 16.7659 27.3643 16.9474 27.2612 17.1017C27.158 17.256 27.0115 17.3763 26.84 17.4473C26.6685 17.5184 26.4798 17.537 26.2977 17.5008C26.1157 17.4645 25.9485 17.3752 25.8172 17.2439C25.686 17.1127 25.5966 16.9454 25.5604 16.7634C25.5241 16.5813 25.5427 16.3926 25.6138 16.2211C25.6848 16.0496 25.8051 15.9031 25.9594 15.7999C26.1138 15.6968 26.2952 15.6418 26.4808 15.6418C26.7297 15.6418 26.9684 15.7407 27.1444 15.9167C27.3204 16.0927 27.4193 16.3314 27.4193 16.5803Z"
						fill={fill}
					/>
					<path
						d="M21.6006 17.1434C20.7468 17.1434 19.9121 17.3966 19.2022 17.8709C18.4922 18.3453 17.9389 19.0196 17.6121 19.8084C17.2854 20.5972 17.1999 21.4653 17.3665 22.3027C17.533 23.1401 17.9442 23.9094 18.548 24.5131C19.1517 25.1169 19.921 25.5281 20.7584 25.6946C21.5958 25.8612 22.4639 25.7757 23.2527 25.449C24.0416 25.1222 24.7158 24.5689 25.1902 23.8589C25.6645 23.149 25.9177 22.3143 25.9177 21.4605C25.9177 20.3155 25.4629 19.2174 24.6533 18.4078C23.8437 17.5982 22.7456 17.1434 21.6006 17.1434ZM21.6006 24.6514C20.9695 24.6514 20.3526 24.4642 19.8279 24.1136C19.3031 23.763 18.8941 23.2647 18.6526 22.6816C18.4111 22.0985 18.3479 21.4569 18.471 20.838C18.5942 20.219 18.8981 19.6504 19.3443 19.2042C19.7906 18.7579 20.3591 18.454 20.9781 18.3309C21.5971 18.2078 22.2387 18.271 22.8217 18.5125C23.4048 18.754 23.9031 19.163 24.2538 19.6877C24.6044 20.2125 24.7915 20.8294 24.7915 21.4605C24.789 22.306 24.4521 23.1162 23.8542 23.7141C23.2563 24.3119 22.4461 24.6489 21.6006 24.6514ZM25.73 12.2632H17.4712C16.1271 12.2632 14.8381 12.7971 13.8877 13.7475C12.9373 14.698 12.4033 15.987 12.4033 17.3311V25.5899C12.4033 26.934 12.9373 28.223 13.8877 29.1734C14.8381 30.1238 16.1271 30.6578 17.4712 30.6578H25.73C27.0741 30.6578 28.3632 30.1238 29.3136 29.1734C30.264 28.223 30.7979 26.934 30.7979 25.5899V17.3311C30.7979 15.987 30.264 14.698 29.3136 13.7475C28.3632 12.7971 27.0741 12.2632 25.73 12.2632ZM29.6717 25.5899C29.6717 26.6353 29.2564 27.6379 28.5172 28.3771C27.778 29.1163 26.7754 29.5316 25.73 29.5316H17.4712C16.4258 29.5316 15.4232 29.1163 14.684 28.3771C13.9448 27.6379 13.5295 26.6353 13.5295 25.5899V17.3311C13.5295 16.2857 13.9448 15.2831 14.684 14.5439C15.4232 13.8047 16.4258 13.3894 17.4712 13.3894H25.73C26.7754 13.3894 27.778 13.8047 28.5172 14.5439C29.2564 15.2831 29.6717 16.2857 29.6717 17.3311V25.5899ZM27.4193 16.5803C27.4193 16.7659 27.3643 16.9474 27.2612 17.1017C27.158 17.256 27.0115 17.3763 26.84 17.4473C26.6685 17.5184 26.4798 17.537 26.2977 17.5008C26.1157 17.4645 25.9485 17.3752 25.8172 17.2439C25.686 17.1127 25.5966 16.9454 25.5604 16.7634C25.5241 16.5813 25.5427 16.3926 25.6138 16.2211C25.6848 16.0496 25.8051 15.9031 25.9594 15.7999C26.1138 15.6968 26.2952 15.6418 26.4808 15.6418C26.7297 15.6418 26.9684 15.7407 27.1444 15.9167C27.3204 16.0927 27.4193 16.3314 27.4193 16.5803Z"
						stroke={fill}
						strokeWidth="0.5"
					/>
					<path
						d="M21.6006 17.1434C20.7468 17.1434 19.9121 17.3966 19.2022 17.8709C18.4922 18.3453 17.9389 19.0196 17.6121 19.8084C17.2854 20.5972 17.1999 21.4653 17.3665 22.3027C17.533 23.1401 17.9442 23.9094 18.548 24.5131C19.1517 25.1169 19.921 25.5281 20.7584 25.6946C21.5958 25.8612 22.4639 25.7757 23.2527 25.449C24.0416 25.1222 24.7158 24.5689 25.1902 23.8589C25.6645 23.149 25.9177 22.3143 25.9177 21.4605C25.9177 20.3155 25.4629 19.2174 24.6533 18.4078C23.8437 17.5982 22.7456 17.1434 21.6006 17.1434ZM21.6006 24.6514C20.9695 24.6514 20.3526 24.4642 19.8279 24.1136C19.3031 23.763 18.8941 23.2647 18.6526 22.6816C18.4111 22.0985 18.3479 21.4569 18.471 20.838C18.5942 20.219 18.8981 19.6504 19.3443 19.2042C19.7906 18.7579 20.3591 18.454 20.9781 18.3309C21.5971 18.2078 22.2387 18.271 22.8217 18.5125C23.4048 18.754 23.9031 19.163 24.2538 19.6877C24.6044 20.2125 24.7915 20.8294 24.7915 21.4605C24.789 22.306 24.4521 23.1162 23.8542 23.7141C23.2563 24.3119 22.4461 24.6489 21.6006 24.6514ZM25.73 12.2632H17.4712C16.1271 12.2632 14.8381 12.7971 13.8877 13.7475C12.9373 14.698 12.4033 15.987 12.4033 17.3311V25.5899C12.4033 26.934 12.9373 28.223 13.8877 29.1734C14.8381 30.1238 16.1271 30.6578 17.4712 30.6578H25.73C27.0741 30.6578 28.3632 30.1238 29.3136 29.1734C30.264 28.223 30.7979 26.934 30.7979 25.5899V17.3311C30.7979 15.987 30.264 14.698 29.3136 13.7475C28.3632 12.7971 27.0741 12.2632 25.73 12.2632ZM29.6717 25.5899C29.6717 26.6353 29.2564 27.6379 28.5172 28.3771C27.778 29.1163 26.7754 29.5316 25.73 29.5316H17.4712C16.4258 29.5316 15.4232 29.1163 14.684 28.3771C13.9448 27.6379 13.5295 26.6353 13.5295 25.5899V17.3311C13.5295 16.2857 13.9448 15.2831 14.684 14.5439C15.4232 13.8047 16.4258 13.3894 17.4712 13.3894H25.73C26.7754 13.3894 27.778 13.8047 28.5172 14.5439C29.2564 15.2831 29.6717 16.2857 29.6717 17.3311V25.5899ZM27.4193 16.5803C27.4193 16.7659 27.3643 16.9474 27.2612 17.1017C27.158 17.256 27.0115 17.3763 26.84 17.4473C26.6685 17.5184 26.4798 17.537 26.2977 17.5008C26.1157 17.4645 25.9485 17.3752 25.8172 17.2439C25.686 17.1127 25.5966 16.9454 25.5604 16.7634C25.5241 16.5813 25.5427 16.3926 25.6138 16.2211C25.6848 16.0496 25.8051 15.9031 25.9594 15.7999C26.1138 15.6968 26.2952 15.6418 26.4808 15.6418C26.7297 15.6418 26.9684 15.7407 27.1444 15.9167C27.3204 16.0927 27.4193 16.3314 27.4193 16.5803Z"
						stroke={fill}
						strokeWidth="0.5"
					/>
				</svg>
			</Link>
			<Link href="https://www.linkedin.com/company/fba-ink/">
				<svg
					width={width}
					height={height}
					viewBox="0 0 43 43"
					fill={fill}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M30.9376 21.4974V28.6138H26.9956V21.9728C26.9956 20.3059 26.4254 19.1682 24.998 19.1682C23.909 19.1682 23.2597 19.9343 22.9745 20.6774C22.8715 20.943 22.8439 21.3126 22.8439 21.6822V28.6138H18.9001C18.9001 28.6138 18.9535 17.3684 18.9001 16.2038H22.8439V17.9613L22.8182 18.0017H22.8439V17.9632C23.3682 17.1163 24.3026 15.9112 26.3978 15.9112C28.9914 15.9112 30.9376 17.686 30.9376 21.4974ZM14.7742 10.2192C13.4259 10.2192 12.543 11.1471 12.543 12.3636C12.543 13.5571 13.4002 14.5099 14.7227 14.5099H14.7485C16.1244 14.5099 16.9797 13.5551 16.9797 12.3636C16.954 11.1471 16.1244 10.2192 14.7742 10.2192ZM12.7766 28.6138H16.7204V16.2038H12.7766V28.6138Z"
						fill={fill}
					/>
					<path
						d="M21.5703 38.3221C26.0875 38.3221 30.4197 36.5276 33.6138 33.3335C36.8079 30.1394 38.6024 25.8072 38.6024 21.2901C38.6024 16.7729 36.8079 12.4407 33.6138 9.24658C30.4197 6.05245 26.0875 4.25801 21.5703 4.25801C17.0531 4.25801 12.721 6.05245 9.52685 9.24658C6.33273 12.4407 4.53828 16.7729 4.53828 21.2901C4.53828 25.8072 6.33273 30.1394 9.52685 33.3335C12.721 36.5276 17.0531 38.3221 21.5703 38.3221ZM21.5703 42.5801C9.81183 42.5801 0.280273 33.0485 0.280273 21.2901C0.280273 9.53156 9.81183 0 21.5703 0C33.3288 0 42.8604 9.53156 42.8604 21.2901C42.8604 33.0485 33.3288 42.5801 21.5703 42.5801Z"
						fill={fill}
					/>
				</svg>
			</Link>
			<Link href="https://www.tiktok.com/@fba.ink?_t=8ac9gQpJAtq&_r=1">
				<svg
					width={width}
					height={height}
					viewBox="0 0 43 43"
					fill={fill}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.71 38.3221C26.2271 38.3221 30.5593 36.5276 33.7534 33.3335C36.9476 30.1394 38.742 25.8072 38.742 21.2901C38.742 16.7729 36.9476 12.4407 33.7534 9.24658C30.5593 6.05245 26.2271 4.25801 21.71 4.25801C17.1928 4.25801 12.8606 6.05245 9.6665 9.24658C6.47237 12.4407 4.67793 16.7729 4.67793 21.2901C4.67793 25.8072 6.47237 30.1394 9.6665 33.3335C12.8606 36.5276 17.1928 38.3221 21.71 38.3221ZM21.71 42.5801C9.95148 42.5801 0.419922 33.0485 0.419922 21.2901C0.419922 9.53156 9.95148 0 21.71 0C33.4685 0 43 9.53156 43 21.2901C43 33.0485 33.4685 42.5801 21.71 42.5801Z"
						fill={fill}
					/>
					<path
						d="M27.2763 13.4213C27.2763 13.4213 27.8746 13.989 27.2763 13.4213C26.4744 12.5352 26.0324 11.3972 26.0328 10.2192H22.4078V24.2991C22.3799 25.061 22.0475 25.7827 21.4808 26.3122C20.914 26.8417 20.1571 27.1376 19.3694 27.1377C17.7036 27.1377 16.3193 25.8206 16.3193 24.1855C16.3193 22.2325 18.2667 20.7677 20.2727 21.3695V17.7815C16.2255 17.2591 12.6826 20.3022 12.6826 24.1855C12.6826 27.9666 15.9204 30.6577 19.3577 30.6577C23.0413 30.6577 26.0328 27.7622 26.0328 24.1855V17.0434C27.5027 18.0652 29.2675 18.6134 31.0772 18.6104V15.1018C31.0772 15.1018 28.8717 15.2039 27.2763 13.4213Z"
						fill={fill}
					/>
				</svg>
			</Link>
		</div>
	)
}

export default SocialLinks

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoBlack from '../../public/assets/images/logo-black.png'
import logoWhite from '../../public/assets/images/logo-white.png'

const Logo = ({ width, height, variant }) => {
	return (
		<div>
			<Link href="/" className="cursor-pointer">
				<div>
					<Image
						src={variant === 'white' ? logoWhite : logoBlack}
						alt="logo"
						width={width}
						height={height}
					/>
				</div>
			</Link>
		</div>
	)
}

export default Logo

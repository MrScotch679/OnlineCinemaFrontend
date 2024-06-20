import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoIcon from '@/assets/logo.svg'

import styles from './logo.module.scss'

export const Logo: FC = () => {
	return (
		<Link href='/' className={styles.logo}>
			<Image
				src={LogoIcon}
				alt='Online Cinema'
				width={34}
				height={34}
				draggable={false}
			/>
			Online Cinema
		</Link>
	)
}

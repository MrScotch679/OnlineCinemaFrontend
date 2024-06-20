'use client'

import { FC } from 'react'

import styles from './loader.module.scss'

interface LoaderProps {
	size?: number
}

export const Loader: FC<LoaderProps> = ({ size }) => {
	return (
		<div className={styles.preloader} style={{ width: size, height: size }}>
			<div className={styles.circle} />
		</div>
	)
}

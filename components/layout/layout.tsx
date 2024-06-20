import { Inter } from 'next/font/google'
import { FC, PropsWithChildren, memo } from 'react'

import styles from './layout.module.scss'
import { Navigation } from './navigation/navigation'
import { Sidebar } from './sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en' className={`${inter.className} ${styles.html}`}>
			<body className={styles.layout}>
				<Navigation />

				<main className={styles.contentWrapper}>{children}</main>

				<Sidebar />
			</body>
		</html>
	)
}

import { Inter } from 'next/font/google'
import { FC, PropsWithChildren, memo } from 'react'

import styles from './layout.module.scss'
import { Navigation } from './navigation/navigation'
import { Sidebar } from './sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => {
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

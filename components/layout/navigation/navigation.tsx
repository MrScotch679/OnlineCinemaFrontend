'use client'

import { Routes } from '@/enums/routes'

import { Logo } from './components/logo/logo'
import { NavigationItemsGroup } from './components/navigation-items-group/navigation-items-group'
import { getNavigationGroupConfig } from './helpers/get-navigation-group-config'
import { useNavigationCategories } from './hooks/use-navigation-сategories'
import { footerItems, menuItems } from './navigation.config'
import styles from './navigation.module.scss'

export const Navigation = () => {
	const { categories, isLoading } = useNavigationCategories()

	const config = getNavigationGroupConfig({
		groupTitle: 'Popular genres',
		groupLink: Routes.GENRES,
		groupItems: categories
	})

	return (
		<nav className={styles.navigation}>
			<Logo />

			<NavigationItemsGroup config={menuItems} />

			<NavigationItemsGroup config={config} isLoading={isLoading} />

			<NavigationItemsGroup config={footerItems} />
		</nav>
	)
}

import { IGroupItems } from '@/types/navigation/group-items'

import { Routes } from '@/enums/routes'

export const menuItems: IGroupItems = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			title: 'Home',
			link: Routes.HOME
		},
		{
			icon: 'MdExplore',
			title: 'Discovery',
			link: Routes.GENRES
		},
		{
			icon: 'MdRefresh',
			title: 'Fresh movies',
			link: Routes.FRESH
		},
		{
			icon: 'MdLocalFireDepartment',
			title: 'Trending now',
			link: Routes.TRENDING
		}
	]
}

export const footerItems: IGroupItems = {
	title: 'General',
	items: []
}

import { FC } from 'react'

import { IGroupItems } from '@/types/navigation/group-items'

import { NavigationItem } from '../navigation-item/navigation-item'

import styles from './navigation-items-group.module.scss'
import { Loader } from '@/components/ui/loader/loader'

interface INavigationItemsGroupProps {
	config: IGroupItems
	isLoading?: boolean
}

export const NavigationItemsGroup: FC<INavigationItemsGroupProps> = ({
	config,
	isLoading
}) => {
	const { title, items } = config

	return (
		<div className={styles.groupWrapper}>
			<p className={styles.groupTitle}>{title}</p>

			{isLoading ? (
				<Loader size={150} />
			) : (
				<ul>
					{items?.map(item => <NavigationItem key={item.link} item={item} />)}
				</ul>
			)}
		</div>
	)
}

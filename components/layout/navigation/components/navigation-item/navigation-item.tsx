import cx from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { INavigationItem } from '@/types/navigation/navigation-item'

import styles from './navigation-item.module.scss'
import { MaterialIcon } from '@/components/ui/material-icon/material-icon'

interface INavigationItemProps {
	item: INavigationItem
}

export const NavigationItem: FC<INavigationItemProps> = ({ item }) => {
	return (
		<li className={cx({ [styles.active]: true })}>
			<Link href={item.link} className={styles.textLink}>
				<MaterialIcon icon={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

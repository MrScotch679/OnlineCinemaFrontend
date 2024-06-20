import { IGenre } from '@/types/genre.interface'
import { IGroupItems } from '@/types/navigation/group-items'

export const getNavigationGroupConfig = ({
	groupTitle,
	groupLink,
	groupItems
}: {
	groupTitle: string
	groupLink: string
	groupItems: IGenre[]
}): IGroupItems => {
	const items = groupItems.map(genre => ({
		icon: genre.icon,
		title: genre.title,
		link: `/${groupLink}/${genre.slug}`
	}))

	return {
		title: groupTitle,
		items
	}
}

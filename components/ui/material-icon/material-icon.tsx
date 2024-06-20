import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcons } from '@/types/icon.type'

interface MaterialIconProps {
	icon: TypeMaterialIcons
}

export const MaterialIcon: FC<MaterialIconProps> = ({ icon }) => {
	const MaterialIcon = MaterialIcons[icon]

	return <MaterialIcon />
}

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { GenreServise } from '@/services/genre.service'

export const useNavigationCategories = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['navigationCategories'],
		queryFn: () => GenreServise.getPopularGenres()
	})

	const categories = useMemo(() => {
		return data?.data || []
	}, [data])

	return {
		categories,
		isLoading
	}
}

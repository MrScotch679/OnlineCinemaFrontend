import axios from 'axios'

import { IGenre } from '@/types/genre.interface'

import { axiosInstance } from './api'

export const GenreServise = {
	rootPath: '/genre',

	async getPopularGenres(limit: number = 4) {
		console.log('this.rootPath :>> ', this.rootPath)

		return axiosInstance.get<IGenre[]>(`${this.rootPath}`, {
			params: {
				limit
			}
		})
	}
}

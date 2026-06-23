import dayjs from 'dayjs'
import { apiConfig } from './api-config.js'


export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data = await response.json()

        const dailySchedules= data.filter((schelue) => dayjs(date).isSame(schelue.when, 'day'))

        return dailySchedules
    } catch (error) {
        console.error(error)
        alert('Ops, algo deu errado. Tente novamente mais tarde.')
    }
}
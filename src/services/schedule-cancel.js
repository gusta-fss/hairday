import { apiConfig } from './api-config.js'


export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: 'DELETE',
        })
    } catch (error) {
        console.error(error)
        alert('Ops, algo deu errado. Tente novamente mais tarde.')
    }
}
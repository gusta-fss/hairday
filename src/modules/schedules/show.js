import dayjs from 'dayjs'


const periodMorning = document.getElementById('period-morning')
const periodAfternoon = document.getElementById('period-afternoon')
const periodNight = document.getElementById('period-night')


export function schedulesShow({ dailySchedules }) {
    try {
        periodMorning.innerHTML = ''
        periodAfternoon.innerHTML = ''
        periodNight.innerHTML = ''

        dailySchedules.forEach(schedule => {
            const item = Object.assign(document.createElement('li'), {
                className: 'schedule-item'
            });
            item.dataset.id = schedule.id;

            item.innerHTML = `
                <strong>${dayjs(schedule.when).format('HH:mm')}</strong>
                <span>${schedule.name}</span>
                <img class="cancel-icon" src="./src/assets/cancel.svg" alt="cancelar">
            `;

            const hour = dayjs(schedule.when).hour();
            if (hour <= 12) {
                periodMorning.appendChild(item);
            } else if (hour <= 18) {
                periodAfternoon.appendChild(item);
            } else {
                periodNight.appendChild(item);
            }
        });
    } catch (error) {
        console.error(error)
        alert('Ops, algo deu errado. Tente novamente mais tarde.')
    }
}
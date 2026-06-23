export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available')

    hours.forEach((available) => {
        available.onclick = (event) => {
            hours.forEach((hour) => {
                hour.classList.remove('hour-selected')
            })

            event.target.classList.add('hour-selected')
        }
    })
}
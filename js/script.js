document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date('2025-07-05T16:00:00');

    const elDays = document.querySelector('#day');
    const elHours = document.querySelector('#hour');
    const elMinutes = document.querySelector('#minute');
    const elSeconds = document.querySelector('#second');
    const elDaysText = document.querySelector('#day-text');
    const elHoursText = document.querySelector('#hour-text');
    const elMinutesText = document.querySelector('#minute-text');
    const elSecondsText = document.querySelector('#second-text');

    const declensionNum = (num, words) => {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };

    const updateTimer = () => {
        const now = new Date();
        const diff = Math.max(0, deadline - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        elDays.textContent = String(days).padStart(2, '0');
        elHours.textContent = String(hours).padStart(2, '0');
        elMinutes.textContent = String(minutes).padStart(2, '0');
        elSeconds.textContent = String(seconds).padStart(2, '0');

        elDaysText.textContent = String(declensionNum(days, ['ДЕНЬ', 'ДНЯ', 'ДНЕЙ']));
        elHoursText.textContent = String(declensionNum(hours, ['ЧАС', 'ЧАСА', 'ЧАСОВ']));
        elMinutesText.textContent = String(declensionNum(minutes, ['МИНУТА', 'МИНУТЫ', 'МИНУТ']));
        elSecondsText.textContent = String(declensionNum(seconds, ['СЕКУНДА', 'СЕКУНДЫ', 'СЕКУНД']));

        if (diff === 0) {
            clearInterval(timerId);
        }
    };
      updateTimer();
      const timerId = setInterval(updateTimer, 1000);
});
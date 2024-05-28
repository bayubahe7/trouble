function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondDeg = ((seconds/60)*360)+90;
    const minuteDeg = ((minutes/60)*360)+90;
    const hourDeg = ((hours/12)*360)+90+(minutes/60)*30;

secondHand.computedStyleMap.transform = `rotate(${secondDeg}deg)`;
minuteHand.computedStyleMap.transform = `rotate(${minuteDeg}deg)`;
hourHand.computedStyleMap.transform = `rotate(${hourDeg}deg)`;
}
setInterval(updateClock, 1000);

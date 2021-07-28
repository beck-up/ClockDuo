let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // - 90 P/ compensar a perda de 90 graus no eixo
    let mDeg = ((360 / 60) * minute) - 90; // - 90 P/ >
    let hDeg = ((360 / 12) * hour) - 90;   // - 90 P/ >

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time; // Fun...>Add o 0 corrigindo para 2 casas decimais
}

setInterval(updateClock, 1000);
updateClock(); //Desativa o delay de 1 segundo

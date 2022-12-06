const clockElement = window.document.getElementById('clock')
const hourArrayElement = window.document.getElementById('clock__hour-array')
const minuteArrayElement = window.document.getElementById('clock__minute-array')
const secondArrayElement = window.document.getElementById('clock__second-array')

let lastSecond;


const init = () => {

    createClockElements();

    setInterval(timeChanger, 100);
}

const createClockElements = () => {

    let arraysWrapper = document.createElement('div');
    arraysWrapper.className = "clock__arrays-wrapper";
    arraysWrapper.append(hourArrayElement, minuteArrayElement, secondArrayElement);

    clockElement.append(arraysWrapper);
}

const timeChanger = () => {
    let time = getTime();

    if (time.second !== lastSecond) {
        console.log(`${time.hour}.${time.minute}.${time.second}`);

        hourArrayElement.style.transform = `rotate(${getTurn('hour', time.hour)}turn)`;
        minuteArrayElement.style.transform = `rotate(${getTurn('minute', time.minute)}turn)`;
        secondArrayElement.style.transform = `rotate(${getTurn('second', time.second)}turn)`;
    }

    lastSecond = time.second;
}

const getTime = () => {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return {
        ts: date,
        hour: hour,
        minute: minute,
        second: second,
    }
}


const getTurn = (arrayType, value) => {
    let turn;

    if (arrayType === 'hour') {
        turn = value/24;
    } else {
        turn = value/60;
    }

    return turn
}

init();
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId;
    }
    addClock (alarmTime, alarmGo) {
        if (alarmTime || alarmGo) {
        throw new Error("Отсутствуют обязательные аргументы")
        }
        if (this.alarmCollection.some(item => item.time == alarmTime) {
        console.warn("Уже присутствует звонок на это же время")
        }
        this.alarmCollection.push({callback: "", time: "", canCall: true})
    }
    removeClock(time) {
        this.alarmCollection.splice(this.alarmCollection.findIndex((item) => item.time == time), 1);
    }
    getCurrentFormattedTime () {
    let dateHH = new Date(Date.now() + 10800000).getHours();
    let dateMM = new Date(Date.now() + 10800000).getMinutes();
    let hours = String(dateHH).length == 1 ? `0${dateHH}` : dateHH;
    let minutes = String(dateMM).length == 1 ? `0${dateMM}` : dateMM;
    return `${hours}:${minutes}`;
    }
    start() {
        if (this.intervalId) {
        this.intervalId = setInterval(this.alarmCollection.forEach((item) {
            if (item.canCall && this.getCurrentFormattedTime() == item.time) {
            item.canCall = false;
            return item.callback();
            }
        }), 1000)
        }
        return;
    }
    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls () {
        this.alarmCollection.forEach((item) => item.canCall = true);
    }
    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}
  
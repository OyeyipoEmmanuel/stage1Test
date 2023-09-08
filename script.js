const date = new Date
const utcTime = date.getTime()
const utcTimeElement = document.querySelector('.utcTime');
utcTimeElement.innerHTML = "UTC Time in milli seconds: " + utcTime;
const dayVal = date.getDay() + 1;

const dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const dayOfWeekElement = document.querySelector('.dayOfWeek');
dayOfWeekElement.innerHTML = "Today is : " + dayArray[dayVal];
console.log(dayArray[dayVal])

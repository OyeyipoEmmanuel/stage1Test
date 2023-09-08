const date = new Date
const utcTime = date.getTime()
const utcTimeElement = document.querySelector('.utcTime');
utcTimeElement.innerHTML = "UTC Time in milli seconds: " + utcTime;
const dayVal = date.toLocaleDateString('en-US', { weekday: 'long' });
const dayOfWeekElement = document.querySelector('.dayOfWeek');
dayOfWeekElement.innerHTML = "Today is : " + dayVal;

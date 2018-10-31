/* eslint-env browser*/

var d = new Date();

var weekDayNum = d.getDay();
var weekday = new Array(7);
var dayOfWeek = "";

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

for (var i = 0; i < 7; i++) {
    if (i == weekDayNum) {
        dayOfWeek = weekday[i];
    }
}

var monthNum = d.getMonth();
var months = new Array(12);
var month = "";

months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

month = months[monthNum];

var day = d.getDate();
var year = d.getFullYear();

var currentDate = dayOfWeek + ", " + day + " " + month + " " + year;

document.getElementById("spanDate").innerHTML = currentDate;
function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM"
    }
if (hour == 0) {
    hour = 12;
} else if (hour > 12) {
    hour = hour - 12;
}

hour = extranull(hour);
minute = extranull(minute);
second = extranull(second);
document.getElementById("clock").innerText = hour + " : " + minute + " : " + second + " " + period;
setTimeout(Time, 1000);

}

function extranull(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();

for (
    var moth_array = [
        { val: "01", name: "Jan" },
        { val: "02", name: "Feb" },
        { val: "03", name: "Mar" },
        { val: "04", name: "Apr" },
        { val: "05", name: "May" },
        { val: "06", name: "Jun" },
        { val: "07", name: "Jul" },
        { val: "08", name: "Aug" },
        { val: "09", name: "Sep" },
        { val: "10", name: "Oct" },
        { val: "11", name: "Nov" },
        { val: "12", name: "Dec" },
    ],
    year_input = document.getElementById("year"),
    month_input = document.getElementById("month"),
    date_input = document.getElementById("date"),
    i = 1900;
    i <= 2100;
    i++
) {
    var opt = document.createElement("option"),
        currentYear = new Date().getFullYear();
    ((opt.value = i),
        (opt.innerHTML = i),
        i === currentYear && (opt.selected = !0),
        year_input.appendChild(opt));
}
for (var i1 = 1; i1 <= 31; i1++) {
    var opt1 = document.createElement("option"),
        currendate = new Date().getDate(),
        num = 1 === i1.toString().length ? "0" + i1 : i1;
    ((opt1.value = num),
        (opt1.innerHTML = num),
        i1 === currendate && (opt1.selected = !0),
        date_input.appendChild(opt1));
}
for (var i2 = 0; i2 < 12; i2++) {
    var opt2 = document.createElement("option"),
        currentMonth = new Date().getDate(),
        _m = moth_array[i2];
    ((opt2.value = _m.val),
        (opt2.innerHTML = _m.name),
        i2 === currentMonth && (opt2.selected = !0),
        month_input.appendChild(opt2));
}

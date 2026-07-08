// cspell:disable
var MPLNT = [
    "စနေ",
    "တနင်္ဂနွေ",
    "တနင်္ဂလာ",
    "အင်္ဂါ",
    "ဗုဒ္ဓဟူး",
    "ကြာသာပတေး",
    "သောကြာ",
    "ရာဟု",
],
    EPLNT = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI", "YARHU"],
    EWD = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ],
    MWD = [
        "စနေ",
        "တနင်္ဂနွေ",
        "တနင်္ဂလာ",
        "အင်္ဂါ",
        "ဗုဒ္ဓဟူး",
        "ကြာသာပတေး",
        "သောကြာ",
    ],
    EM = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    EMB = ["Binga", "Atun", "Yaza", "Adipati", "Marana", "Thike", "Puti"],
    MMB = ["ဘင်ဂ", "အထွန်း", "ရာဇ", "အဓိပတိ", "မရဏ", "သိုက်", "ပုတိ"],
    joage = [
        { id: 1, name: "တနင်္ဂနွေ", ak: 1, age: 6 },
        { id: 2, name: "တနင်္ဂလာ", ak: 2, age: 15 },
        { id: 3, name: "အင်္ဂါ", ak: 3, age: 8 },
        { id: 4, name: "ဗုဒ္ဓဟူး", ak: 4, age: 17 },
        { id: 5, name: "စနေ", ak: 0, age: 10 },
        { id: 6, name: "ကြာသာပတေး", ak: 5, age: 19 },
        { id: 7, name: "ရာဟု", ak: "", age: 12 },
        { id: 8, name: "သောကြာ", ak: 6, age: 21 },
    ];
function time2D(e, t, n) {
    return (e - 12) / 24 + t / 1440 + n / 86400;
}
function G2J(e, t, n, a, r, o, m, i) {
    (void 0 === a && (a = 12),
        void 0 === r && (r = 0),
        void 0 === o && (o = 0),
        void 0 === m && (m = 0),
        void 0 === i && (i = 2361222));
    var l = time2D(a, r, o),
        u = Math.floor((14 - t) / 12);
    e = e + 4800 - u;
    var d =
        n +
        Math.floor((153 * (t = t + 12 * u - 3) + 2) / 5) +
        365 * e +
        Math.floor(e / 4);
    return (
        1 === m
            ? (d = d - Math.floor(e / 100) + Math.floor(e / 400) - 32045)
            : 2 === m
                ? (d -= 32083)
                : (d = d - Math.floor(e / 100) + Math.floor(e / 400) - 32045) < i &&
                (d =
                    n +
                    Math.floor((153 * t + 2) / 5) +
                    365 * e +
                    Math.floor(e / 4) -
                    32083) > i &&
                (d = i),
        d + l
    );
}
function bSearch2(e, t) {
    for (var n = 0, a = 0, r = t.length - 1; r >= a;)
        if (t[(n = Math.floor((a + r) / 2))][0] > e) r = n - 1;
        else {
            if (!(t[n][0] < e)) return n;
            a = n + 1;
        }
    return -1;
}
function bSearch1(e, t) {
    for (var n = 0, a = 0, r = t.length - 1; r >= a;)
        if (t[(n = Math.floor((a + r) / 2))] > e) r = n - 1;
        else {
            if (!(t[n] < e)) return n;
            a = n + 1;
        }
    return -1;
}
function GetMyConst(e) {
    var t,
        n,
        a,
        r,
        o,
        m,
        i = 0;
    return (
        e >= 1312
            ? ((a = 3), (r = -0.5), (o = 8), (t = [[1377, 1]]), (n = [1344, 1345]))
            : e >= 1217
                ? ((a = 2),
                    (r = -1),
                    (o = 4),
                    (t = [
                        [1234, 1],
                        [1261, -1],
                    ]),
                    (n = [1263, 1264]))
                : e >= 1100
                    ? ((a = 1.3),
                        (r = -0.85),
                        (o = -1),
                        (t = [
                            [1120, 1],
                            [1126, -1],
                            [1150, 1],
                            [1172, -1],
                            [1207, 1],
                        ]),
                        (n = [1201, 1202]))
                    : (e >= 798
                        ? ((a = 1.2),
                            (r = -1.1),
                            (o = -1),
                            (t = [
                                [813, -1],
                                [849, -1],
                                [851, -1],
                                [854, -1],
                                [927, -1],
                                [933, -1],
                                [936, -1],
                                [938, -1],
                                [949, -1],
                                [952, -1],
                                [963, -1],
                                [968, -1],
                                [1039, -1],
                            ]))
                        : ((a = 1.1),
                            (r = -1.1),
                            (o = -1),
                            (t = [
                                [205, 1],
                                [246, 1],
                                [471, 1],
                                [572, -1],
                                [651, 1],
                                [653, 2],
                                [656, 1],
                                [672, 1],
                                [729, 1],
                                [767, -1],
                            ])),
                        (n = [])),
        (m = bSearch2(e, t)) >= 0 && (r += t[m][1]),
        (m = bSearch1(e, n)) >= 0 && (i = 1),
        { EI: a, WO: r, NM: o, EW: i }
    );
}
function cal_watat(e) {
    var t = GetMyConst(e),
        n = 0.9076417607184055 * (12 - t.NM),
        a = (365.2587564814815 * (e + 3739)) % 29.53058794607172;
    a < n && (a += 29.53058794607172);
    var r = Math.round(
        365.2587564814815 * e + 1954168.050623 - a + 132.88764575732273 + t.WO,
    ),
        o = 0;
    return (
        t.EI >= 2
            ? a >= 29.53058794607172 - 0.9076417607184055 * t.NM && (o = 1)
            : ((o = (7 * e + 2) % 19) < 0 && (o += 19), (o = Math.floor(o / 12))),
        { fm: r, watat: (o ^= t.EW) }
    );
}
function cal_my(e) {
    var t,
        n = 0,
        a = 0,
        r = 0,
        o = 0,
        m = cal_watat(e),
        i = m.watat;
    do t = cal_watat(e - ++n);
    while (0 == t.watat && n < 3);
    return (
        i
            ? ((i = Math.floor((a = (m.fm - t.fm) % 354) / 31) + 1),
                (o = m.fm),
                30 != a && 31 != a && (r = 1))
            : (o = t.fm + 354 * n),
        { myt: i, tg1: t.fm + 354 * n - 102, fm: o, werr: r }
    );
}
function j2m(e) {
    var t, n, a, r, o, m, i, l, u, d, c, f;
    return (
        (n = cal_my(
            (t = Math.floor(
                ((e = Math.round(e)) - 0.5 - 1954168.050623) / 365.2587564814815,
            )),
        )),
        (a = e - n.tg1 + 1),
        (i = Math.floor(n.myt / 2)),
        (o = Math.floor(
            (a - 1) / (r = 354 + (1 - (l = Math.floor(1 / (n.myt + 1)))) * 30 + i),
        )),
        (a -= o * r),
        (m = Math.floor((a + 423) / 512)),
        (u = Math.floor(
            ((c = Math.floor((a - i * m + l * m * 30 + 29.26) / 29.544)) + 12) / 16,
        )),
        (d = Math.floor((c + 11) / 16)),
        (f = a - Math.floor(29.544 * c - 29.26) - i * u + l * d * 30),
        (c += 3 * d - 4 * u + 12 * o),
        { myt: n.myt, my: t, mm: c, md: f }
    );
}
var enumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    mnumber = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];
function emnum(e) {
    var t = e.toString().split(""),
        n = [];
    return (
        t.map(function (e) {
            var t = enumber.indexOf(e);
            n.push(mnumber[t]);
        }),
        n.join("")
    );
}
function getAge(e) {
    var t = new Date(),
        n = new Date(e),
        a = t.getFullYear() - n.getFullYear(),
        r = t.getMonth() - n.getMonth();
    return ((r < 0 || (0 === r && t.getDate() < n.getDate())) && a--, a);
}
var docArray = [
    document.getElementById("mb-1"),
    document.getElementById("mb-2"),
    document.getElementById("mb-3"),
    document.getElementById("mb-4"),
    document.getElementById("mb-5"),
    document.getElementById("mb-6"),
    document.getElementById("mb-7"),
],
    ACTIVE_PATTERN_COLOR = "#d5393e";
function mahabote() {
    var e,
        t,
        n,
        a,
        r = year_input.value + "-" + month_input.value + "-" + date_input.value,
        o = new Date(r),
        m = G2J(o.getFullYear(), o.getMonth() + 1, o.getDate()),
        i = j2m(m),
        l = (m + 2) % 7;
    (EWD[l], MWD[l]);
    var u = MMB[(i.my - l) % 7],
        d = i.my % 7,
        c = [
            { id: 1, remin: 1, rem: "၁", cla: "aung" },
            { id: 2, remin: 4, rem: "၄", cla: "lan" },
            { id: 3, remin: 0, rem: "၀", cla: "htuu" },
            { id: 4, remin: 3, rem: "၃", cla: "sit" },
            { id: 5, remin: 6, rem: "၆", cla: "thu" },
            { id: 6, remin: 2, rem: "၂", cla: "kyi" },
            { id: 7, remin: 5, rem: "၅", cla: "pwe" },
        ];
    ((n = (e = c.find(function (e) {
        return e.remin === d;
    })).id),
        (t = c.filter(function (e) {
            return e.id > n;
        })));
    for (
        var f = [].concat(
            [e],
            t,
            c.filter(function (e) {
                return e.id < n;
            }),
        ),
        g = getAge(r),
        M = joage.find(function (e) {
            return e.ak === l;
        }),
        y = M.id,
        h = [].concat(
            [M],
            joage.filter(function (e) {
                return e.id > y;
            }),
            joage.filter(function (e) {
                return e.id < y;
            }),
        ),
        v = 0,
        b = 0;
        h.length > b && !(v >= g);
        b++
    )
        ((v += h[b].age), (a = h[b].name));
    for (
        var E = v - g, B = emnum(g), I = emnum(E), s = 0;
        s < docArray.length;
        s++
    ) {
        var T = docArray[s],
            D = f[s],
            N = D.remin === l;
        ((T.style.color = N ? ACTIVE_PATTERN_COLOR : "currentColor"),
            N
                ? T.setAttribute("data-active-pattern", "true")
                : T.removeAttribute("data-active-pattern"),
            (T.innerHTML = D.rem));
    }
    ((document.getElementById("tb-1").innerHTML = f[0].rem),
        (document.getElementById("tb-2").innerHTML = "" + u + "ဖွား"),
        (document.getElementById("tb-3").innerHTML = "" + B + "နှစ်"),
        (document.getElementById("tb-4").innerHTML = a),
        (document.getElementById("tb-5").innerHTML = "" + I + "နှစ်"));
}
function clearDiv() {
    for (var e = 0; e < docArray.length; e++) {
        var t = docArray[e];
        ((t.style.color = "currentColor"),
            t.removeAttribute("data-active-pattern"),
            (t.innerHTML = ""));
    }
    ((document.getElementById("tb-1").innerHTML = ""),
        (document.getElementById("tb-2").innerHTML = ""),
        (document.getElementById("tb-3").innerHTML = ""),
        (document.getElementById("tb-4").innerHTML = ""),
        (document.getElementById("tb-5").innerHTML = ""));
}
function sanitizeExportTree(e) {
    function t(e) {
        return !!e && (e.indexOf("color-mix(") > -1 || e.indexOf("color(") > -1);
    }
    ((e.style.background = "#ffffff"),
        (e.style.backgroundColor = "#ffffff"),
        (e.style.border = "1px solid #d8dee4"),
        (e.style.borderRadius = "20px"),
        (e.style.boxShadow = "none"),
        (e.style.color = "#1f2937"));
    for (
        var n = e.querySelectorAll(
            ".result-table-wrap, .result-table td, .table-text, .x1-line, .x11-line, .x2-line, .y1-line, .y2-line, .pl, .pc, .pr"
        ),
        a = 0;
        a < n.length;
        a++
    ) {
        var r = n[a];
        r.classList.contains("result-table-wrap") &&
            ((r.style.background = "#ffffff"),
                (r.style.border = "1px solid #d8dee4"),
                (r.style.borderRadius = "16px"));
        "TD" === r.tagName &&
            ((r.style.backgroundColor = "#ffffff"),
                (r.style.borderBottom = "1px solid #e5e7eb"),
                (r.style.color = "#1f2937"),
                r === r.parentElement.children[0] && (r.style.backgroundColor = "#f3f4f6"));
        r.classList.contains("table-text") && (r.style.color = "inherit");
        /^(x1-line|x11-line|x2-line|y1-line|y2-line)$/.test(r.className) &&
            ((r.style.background = "#ffffff"), (r.style.borderColor = "#6b7280"));
        /^(pl|pc|pr)$/.test(r.className) &&
            (r.style.color =
                "true" === r.getAttribute("data-active-pattern")
                    ? ACTIVE_PATTERN_COLOR
                    : "#111827");
    }
    for (
        var o = [e],
        m = [
            "background",
            "backgroundColor",
            "borderColor",
            "borderTopColor",
            "borderRightColor",
            "borderBottomColor",
            "borderLeftColor",
            "boxShadow",
            "color",
            "outlineColor",
            "textDecorationColor",
        ];
        o.length;

    ) {
        for (var i = o.shift(), l = getComputedStyle(i), u = 0; u < m.length; u++) {
            var d = m[u],
                c = l[d];
            if (t(c)) {
                "background" === d
                    ? ((i.style.background = "none"),
                        (i.style.backgroundColor = l.backgroundColor || "#ffffff"))
                    : "backgroundColor" === d
                        ? (i.style.backgroundColor = "#ffffff")
                        : "boxShadow" === d
                            ? (i.style.boxShadow = "none")
                            : d.indexOf("border") === 0 || "outlineColor" === d
                                ? (i.style[d] = "#d1d5db")
                                : "color" === d || "textDecorationColor" === d
                                    ? (i.style[d] = "#1f2937")
                                    : (i.style[d] = "transparent");
            }
        }
        for (var f = 0; f < i.children.length; f++) o.push(i.children[f]);
    }
}
function saveAsImage() {
    html2canvas(document.getElementById("result"), {
        backgroundColor: null,
        onclone: function (e) {
            var t = e.getElementById("result");
            t && sanitizeExportTree(t);
        },
    }).then(function (e) {
        var t = document.createElement("a");
        ((t.download = "maharbote.png"),
            (t.href = e.toDataURL("image/png")),
            t.click());
    });
}
var datetime_btn = document.getElementById("result-btn"),
    clear_btn = document.getElementById("clear-btn");
(datetime_btn.addEventListener("click", mahabote),
    clear_btn.addEventListener("click", clearDiv));

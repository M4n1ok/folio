/*! svg.pathmorphing.js - v0.1.1 - 2017-04-10
 * Copyright (c) 2017 Ulrich-Matthias Schäfer; Licensed MIT */
(function () {
    function a(a, e, f, g, h, i, j) {
        for (var k = a.slice(e, f || j), l = g.slice(h, i || j), m = 0, n = {
            pos: [0, 0],
            start: [0, 0]
        }, o = {pos: [0, 0], start: [0, 0]}; ;) {
            if (k[m] = b.call(n, k[m]), l[m] = b.call(o, l[m]), k[m][0] != l[m][0] || "M" == k[m][0] ? (k[m] = d.call(n, k[m]), l[m] = d.call(o, l[m])) : (k[m] = c.call(n, k[m]), l[m] = c.call(o, l[m])), ++m == k.length && m == l.length)break;
            m == k.length && k.push(["C", n.pos[0], n.pos[1], n.pos[0], n.pos[1], n.pos[0], n.pos[1]]), m == l.length && l.push(["C", o.pos[0], o.pos[1], o.pos[0], o.pos[1], o.pos[0], o.pos[1]])
        }
        return {start: k, dest: l}
    }

    function b(a) {
        switch (a[0]) {
            case"z":
            case"Z":
                a[0] = "L", a[1] = this.start[0], a[2] = this.start[1];
                break;
            case"H":
                a[0] = "L", a[2] = this.pos[1];
                break;
            case"V":
                a[0] = "L", a[2] = a[1], a[1] = this.pos[0];
                break;
            case"T":
                a[0] = "Q", a[3] = a[1], a[4] = a[2], a[1] = this.reflection[1], a[2] = this.reflection[0];
                break;
            case"S":
                a[0] = "C", a[6] = a[4], a[5] = a[3], a[4] = a[2], a[3] = a[1], a[2] = this.reflection[1], a[1] = this.reflection[0]
        }
        return a
    }

    function c(a) {
        var b = a.length;
        return this.pos = [a[b - 2], a[b - 1]], -1 != "SCQT".indexOf(a[0]) && (this.reflection = [2 * this.pos[0] - a[b - 4], 2 * this.pos[1] - a[b - 3]]), a
    }

    function d(a) {
        switch (a[0]) {
            case"M":
                return this.pos = this.start = [a[1], a[2]], a;
            case"L":
                a[5] = a[3] = a[1], a[6] = a[4] = a[2], a[1] = this.pos[0], a[2] = this.pos[1];
                break;
            case"Q":
                a[6] = a[4], a[5] = a[3], a[4] = 1 * a[2] / 3 + 2 * a[4] / 3, a[3] = 1 * a[1] / 3 + 2 * a[3] / 3, a[2] = 1 * this.pos[1] / 3 + 2 * a[2] / 3, a[1] = 1 * this.pos[0] / 3 + 2 * a[1] / 3;
                break;
            case"A":
                throw new Error("Cant morph arcs to beziere")
        }
        return a[0] = "C", this.pos = [a[5], a[6]], this.reflection = [2 * a[5] - a[3], 2 * a[6] - a[4]], a
    }

    function e(a, b) {
        if (b === !1)return !1;
        for (var c = b, d = a.length; d > c; ++c)if ("M" == a[c][0])return c;
        return !1
    }

    SVG.extend(SVG.PathArray, {
        morph: function (b) {
            for (var c = this.value, d = this.parse(b), f = 0, g = 0; ;) {
                if (f === !1 && g === !1)break;
                if (startOffsetNextM = e(c, f === !1 ? !1 : f + 1), destOffsetNextM = e(d, g === !1 ? !1 : g + 1), f === !1) {
                    var h = new SVG.PathArray(i.start).bbox();
                    f = 0 == h.height || 0 == h.width ? c.push(c[0]) - 1 : c.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1
                }
                if (g === !1) {
                    var h = new SVG.PathArray(i.dest).bbox();
                    g = 0 == h.height || 0 == h.width ? d.push(d[0]) - 1 : d.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1
                }
                var i = a(c, f, startOffsetNextM, d, g, destOffsetNextM);
                c = c.slice(0, f).concat(i.start, startOffsetNextM === !1 ? [] : c.slice(startOffsetNextM)), d = d.slice(0, g).concat(i.dest, destOffsetNextM === !1 ? [] : d.slice(destOffsetNextM)), f = startOffsetNextM === !1 ? !1 : f + i.start.length, g = destOffsetNextM === !1 ? !1 : g + i.dest.length
            }
            return this.value = c, this.destination = d, this
        }, at: function (a) {
            if (!this.destination)return this;
            for (var b = 0, c = this.value.length, d = []; c > b; ++b) {
                for (var e = 1, f = this.value[b].length, g = [this.value[b][0]]; f > e; ++e)g.push(this.value[b][e] + (this.destination[b][e] - this.value[b][e]) * a);
                d.push(g)
            }
            return new SVG.PathArray(d)
        }
    })
}).call(this);
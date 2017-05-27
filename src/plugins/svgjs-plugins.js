/*! svg.easing.js - v2.0.0 - 2016-04-25
 * https://github.com/wout/svg.easing.js
 * Copyright (c) 2016 Wout Fierens; Licensed MIT */
!function () {
    var a = {
        quadIn: function (a) {
            return Math.pow(a, 2)
        }, quadOut: function (a) {
            return -(Math.pow(a - 1, 2) - 1)
        }, quadInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
        }, cubicIn: function (a) {
            return Math.pow(a, 3)
        }, cubicOut: function (a) {
            return Math.pow(a - 1, 3) + 1
        }, cubicInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
        }, quartIn: function (a) {
            return Math.pow(a, 4)
        }, quartOut: function (a) {
            return -(Math.pow(a - 1, 4) - 1)
        }, quartInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
        }, quintIn: function (a) {
            return Math.pow(a, 5)
        }, quintOut: function (a) {
            return Math.pow(a - 1, 5) + 1
        }, quintInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
        }, sineIn: function (a) {
            return -Math.cos(a * (Math.PI / 2)) + 1
        }, sineOut: function (a) {
            return Math.sin(a * (Math.PI / 2))
        }, sineInOut: function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        }, expoIn: function (a) {
            return 0 == a ? 0 : Math.pow(2, 10 * (a - 1))
        }, expoOut: function (a) {
            return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
        }, expoInOut: function (a) {
            return 0 == a ? 0 : 1 == a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
        }, circIn: function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }, circOut: function (a) {
            return Math.sqrt(1 - Math.pow(a - 1, 2))
        }, circInOut: function (a) {
            return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }, backIn: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, backOut: function (a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }, backInOut: function (a) {
            var b = 1.70158;
            return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, swingFromTo: function (a) {
            var b = 1.70158;
            return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, swingFrom: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, swingTo: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, bounce: function (a) {
            var b, c = 7.5625, d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }, bounceOut: function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, elastic: function (a) {
            return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
        }
    };
    for (let key in a)SVG.easing[key] = a[key]
}();

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

/*! svg.textmorph.js - v0.1.0 - 2015-10-26
 * Copyright (c) 2015 Ulrich-Matthias Schäfer; Licensed MIT */
function parseXML(xmlStr) {

    return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");

}

function loadFont(filename, cb) {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                cb(ajax.responseXML);
            } else {
                cb()
            }
        }
    };
    ajax.open('GET', filename);
    ajax.send();

}

SVG.fonts = {}

SVG.SVGFont = SVG.invent({

    create: function (source, cb, lazy, undefined) {

        if (typeof cb == 'boolen') {
            lazy = cb;
            cb = function () {
            }
        } else {
            cb = cb || function () {
                }
        }

        cb = cb.bind(this)

        this.lazy = lazy === undefined ? true : false

        var node;
        var fontLoadedCb = function (node, cb) {

            if (!node) throw('Given Parameter is neither XML nor ID nor a fontfile with this name was found. "' + source + '" given')

            this.source = node.getElementsByTagName('font')[0];
            this.family = this.source.firstElementChild.getAttribute('font-family')

            SVG.fonts[this.family] = this
            this.lazy || this.loadAll()

            cb()
        }.bind(this)

        try {
            fontLoadedCb(parseXML(source))
        } catch (e) {
            node = document.getElementById(source)
            node ? fontLoadedCb(node) : loadFont(source, function (node) {
                    fontLoadedCb(node, cb)
                })

        }

    },

    extend: {
        lazy: true,
        cache: {},

        loadLazy: function (glyphs) {
            if (!this.lazy) return

            var i = glyphs.length
            while (i--) {

                if (this.cache[glyphs[i]]) continue

                this.cache[glyphs[i]] = getPathAttributes(this.source.querySelector('glyph[unicode="' + glyphs[i] + '"]'))

            }

            return this

        },

        loadAll: function () {
            this.lazy = false

            var glyphs = this.source.querySelectorAll('glyph')
                , i = glyphs.length

            while (i--) {
                var attr = getPathAttributes(glyphs[i])
                this.cache[attr.unicode] = attr
            }

            return this
        },

        fontSize: function (size) {
            this.size = parseFloat(size)
            return this
        },

        getPathArray: function (glyphs, cb) {

            // load needed glyphs into cache
            this.loadLazy(glyphs)

            // helper variables
            var uPerEm = this.source.firstElementChild.getAttribute('units-per-em')
                , cache = this.cache
                , h = this.source.getAttribute('horiz-adv-x')
                , x = 0
                , scale = this.size / uPerEm

            for (var i = 0, len = glyphs.length; i < len; ++i) {

                if (glyphs[i - 1]) {
                    hkern = this.source.querySelector('hkern[u1="' + glyphs[i - 1] + '"][u2="' + glyphs[i] + '"]')
                    if (hkern) {
                        x -= parseFloat(hkern.getAttribute('k')) * scale
                    }
                }

                var p = new SVG.PathArray(cache[glyphs[i]].d)
                    , box = p.bbox()

                if (box.height && box.width)
                    p.size(box.width * scale, -box.height * scale)

                p.move(x, (uPerEm - box.y - box.height) * scale)

                cb.call(this, p, i)

                x += parseFloat(cache[glyphs[i]]['horiz-adv-x'] || h) * scale;

            }

            return {
                x: x,
                uPerEm: uPerEm,
                scale: scale
            }
        }
    }
})

function getPathAttributes(a) {

    a = a.attributes

    var i = a.length
        , b = {}

    while (i--) {
        b[a[i].nodeName] = SVG.regex.isNumber.test(a[i].nodeValue) ? parseFloat(a[i].nodeValue) : a[i].nodeValue
    }

    // ensure that the glyph has a path
    if (!b['d']) b['d'] = 'M0 0'

    return b
}

SVG.MorphText = SVG.invent({
    // Initialize node
    create: 'g'

    // Inherit from
    , inherit: SVG.G

    // Add class methods
    , extend: {

        glyphs: []
        , family: SVG.defaults.attrs['font-family'].split(',')[0].trim()
        , size: SVG.defaults.attrs['font-size']
        , font: function (k, v) {

            if (v == null) {
                for (var i in k) this.font(i, k[i])
                return this
            }

            this[k] = v

            this.text(this.content)
            return this
        }
        , text: function (glyphs) {

            console.log('aa')
            console.log(glyphs)
            this.content = glyphs
            this.clear()
            this.glyphs = []

            var svgFont = this.family instanceof SVG.SVGFont ? this.family : SVG.fonts[this.family]

            if (!svgFont) return this

            var font = svgFont
                .fontSize(this.size)
                .getPathArray(glyphs, function (pathArray, index) {

                    var p = this.path(pathArray)

                    this.glyphs.push(p)
                    p.glyph = glyphs[index]

                }.bind(this))

            this.remember('font', font)

            return this

        }

    }

    , construct: {
        // Create a group element
        morphText: function (text) {
            return this.put(new SVG.MorphText).text(text)
        }
    }


})

function fixTextLength(glyphs) {

    var a = this.remember('font')
        , p

    while (this.glyphs.length < glyphs.length) {

        p = this.path('M0 0').move(a.x, a.uPerEm * a.scale)
        p.glyph = ' '

        this.glyphs.push(p)
    }

    while (this.glyphs.length > glyphs.length) {
        glyphs += ' '
    }

    // maybe move that to the top?
    while (glyphs[glyphs.length - 1] == ' ' && this.glyphs[glyphs.length - 1].glyph == ' ') {
        this.glyphs.pop().remove()
        glyphs = glyphs.slice(0, -1)
    }

    return glyphs

}


SVG.extend(SVG.FX, {

    text: function (glyphs) {
        console.log(this);
        console.log(glyphs);
        console.log(this._target.glyphs);
        var target = this._target;

        if (!this._target.glyphs) throw 'Text not animatable'

        var svgFont = this._target.family instanceof SVG.SVGFont ? this._target.family : SVG.fonts[this._target.family]

        if (!svgFont) throw('SVG font "' + svgFont.family + '" not (yet) loaded')

        // this._target.glyphs are changed per reference, glyphs is returned
        glyphs = fixTextLength.call(this._target, glyphs)

        var font = svgFont
            .fontSize(this._target.size)
            .getPathArray(glyphs, function (pathArray, index) {

                var bbox = this.glyphs[index].bbox()
                var box = pathArray.bbox()

                var scale = this.remember('font').scale

                if (!bbox.width || !bbox.height) {
                    this.glyphs[index].move(0, -box.height / 2)
                } else if (!box.height || !box.width) {
                    pathArray.move(0, -bbox.height / 2)
                }

                // update glyph representation
                this.glyphs[index].glyph = glyphs[index]

                // animate glyph
                this.glyphs[index].animate().plot(pathArray)
            }.bind(this._target))


        return this

    }

})
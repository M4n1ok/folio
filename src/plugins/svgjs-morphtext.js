/*! svg.textmorph.js - v0.1.0 - 2015-10-26
 * Copyright (c) 2015 Ulrich-Matthias Schäfer; Licensed MIT */
(function () {
    function a(a) {
        return (new window.DOMParser).parseFromString(a, "text/xml")
    }

    function b(a, b) {
        var c = new XMLHttpRequest;
        c.onreadystatechange = function () {
            4 === c.readyState && (200 === c.status ? b(c.responseXML) : b())
        }, c.open("GET", a), c.send()
    }

    function c(a) {
        a = a.attributes;
        for (var b = a.length, c = {}; b--;)c[a[b].nodeName] = SVG.regex.isNumber.test(a[b].nodeValue) ? parseFloat(a[b].nodeValue) : a[b].nodeValue;
        return c.d || (c.d = "M0 0"), c
    }

    function d(a) {
        for (var b, c = this.remember("font"); this.glyphs.length < a.length;)b = this.path("M0 0").move(c.x, c.uPerEm * c.scale), b.glyph = " ", this.glyphs.push(b);
        for (; this.glyphs.length > a.length;)a += " ";
        for (; " " == a[a.length - 1] && " " == this.glyphs[a.length - 1].glyph;)this.glyphs.pop().remove(), a = a.slice(0, -1);
        return a
    }

    SVG.fonts = {}, SVG.SVGFont = SVG.invent({
        create: function (c, d, e, f) {
            "boolen" == typeof d ? (e = d, d = function () {
                }): d = d || function () {
                    }, d = d.bind(this), this.lazy = e === f ? !0 : !1;
            var g, h = function (a, b) {
                if (!a)throw'Given Parameter is neither XML nor ID nor a fontfile with this name was found. "' + c + '" given';
                this.source = a.getElementsByTagName("font")[0], this.family = this.source.firstElementChild.getAttribute("font-family"), SVG.fonts[this.family] = this, this.lazy || this.loadAll(), b()
            }.bind(this);
            try {
                h(a(c))
            } catch (i) {
                g = document.getElementById(c), g ? h(g) : b(c, function (a) {
                        h(a, d)
                    })
            }
        }, extend: {
            lazy: !0, cache: {}, loadLazy: function (a) {
                if (this.lazy) {
                    for (var b = a.length; b--;)this.cache[a[b]] || (this.cache[a[b]] = c(this.source.querySelector('glyph[unicode="' + a[b] + '"]')));
                    return this
                }
            }, loadAll: function () {
                this.lazy = !1;
                for (var a = this.source.querySelectorAll("glyph"), b = a.length; b--;) {
                    var d = c(a[b]);
                    this.cache[d.unicode] = d
                }
                return this
            }, fontSize: function (a) {
                return this.size = parseFloat(a), this
            }, getPathArray: function (a, b) {
                this.loadLazy(a);
                for (var c = this.source.firstElementChild.getAttribute("units-per-em"), d = this.cache, e = this.source.getAttribute("horiz-adv-x"), f = 0, g = this.size / c, h = 0, i = a.length; i > h; ++h) {
                    a[h - 1] && (hkern = this.source.querySelector('hkern[u1="' + a[h - 1] + '"][u2="' + a[h] + '"]'), hkern && (f -= parseFloat(hkern.getAttribute("k")) * g));
                    var j = new SVG.PathArray(d[a[h]].d), k = j.bbox();
                    k.height && k.width && j.size(k.width * g, -k.height * g), j.move(f, (c - k.y - k.height) * g), b.call(this, j, h), f += parseFloat(d[a[h]]["horiz-adv-x"] || e) * g
                }
                return {x: f, uPerEm: c, scale: g}
            }
        }
    }), SVG.MorphText = SVG.invent({
        create: "g",
        inherit: SVG.G,
        extend: {
            glyphs: [],
            family: SVG.defaults.attrs["font-family"].split(",")[0].trim(),
            size: SVG.defaults.attrs["font-size"],
            font: function (a, b) {
                if (null == b) {
                    for (var c in a)this.font(c, a[c]);
                    return this
                }
                return this[a] = b, this.text(this.content), this
            },
            text: function (a) {
                this.content = a, this.clear(), this.glyphs = [];
                var b = this.family instanceof SVG.SVGFont ? this.family : SVG.fonts[this.family];
                if (!b)return this;
                var c = b.fontSize(this.size).getPathArray(a, function (b, c) {
                    var d = this.path(b);
                    this.glyphs.push(d), d.glyph = a[c]
                }.bind(this));
                return this.remember("font", c), this
            }
        },
        construct: {
            morphText: function (a) {
                return this.put(new SVG.MorphText).text(a)
            }
        }
    }), SVG.extend(SVG.FX, {
        text: function (a) {
            if (!this.target.glyphs)throw"Text not animatable";
            var b = this.target.family instanceof SVG.SVGFont ? this.target.family : SVG.fonts[this.target.family];
            if (!b)throw'SVG font "' + b.family + '" not (yet) loaded';
            a = d.call(this.target, a);
            b.fontSize(this.target.size).getPathArray(a, function (b, c) {
                var d = this.glyphs[c].bbox(), e = b.bbox();
                this.remember("font").scale;
                d.width && d.height ? e.height && e.width || b.move(0, -d.height / 2) : this.glyphs[c].move(0, -e.height / 2), this.glyphs[c].glyph = a[c], this.glyphs[c].animate().plot(b)
            }.bind(this.target));
            return this
        }
    })
}).call(this);
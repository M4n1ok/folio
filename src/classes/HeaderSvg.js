'use strict';
import SVG from 'svg.js';
import Plugins from './../plugins/svgjs-plugins'
import Utils from './Utils';
/**
 * @class
 * @namespace
 */
export default class Svg {
    constructor(id, width, height) {
        this._el = document.getElementById(id);
        this._width = width;
        this._height = height;
        this._prefix = 'header-svg';
        this._svg = this.init();
    }

    get svg() {
        return this._svg
    }

    init() {
        let self = this;
        let prefix = self._prefix;
        let svg = SVG(self._el).size(self._width, self._height).attr('id', prefix);
        self._bcg = new Bcg(svg, self._width, self._height, prefix);
        self._pattern = new Pattern(svg, prefix);
        let position = {
            x: self._width / 2,
            y: self._height / 2
        };
        return svg
    }

    draw() {
        let self = this;
        self._bcg.draw();
        self._pattern.draw();
    }

    animate() {
        let self = this;
        self._bcg.animate();
    }

    resize(width, height) {
        let self = this;
        self._svg.size(width, height);
        self._bcg.resize(width, height);
    }

}

/**
 * @class
 * @memberOf HeaderSvg
 */
export class Bcg {
    /**
     * @constructor
     */
    constructor(svg, width, height, prefix) {
        this._el = null;
        this._svg = svg;
        this._width = width;
        this._height = height;
        this._prefix = prefix + '-bcg';
    }

    draw() {
        let self = this;
        let svg = self._svg;
        let prefix = self._prefix;
        let width = self._width;
        let height = self._height;
        let bcg = svg.group()
            .attr('id', prefix)
            .attr('class', prefix + '__box');

        let radius = Utils.getHypotenuse(width / 2, height / 2);

        let gradient = bcg.gradient('radial', function (stop) {
            stop.at(0, '#212121');
            stop.at(.85, '#424242');
        }).attr('id', prefix+'-gradient');

        let circle = bcg.circle(radius * 2).center(width / 2, height / 2)
            .attr('id', prefix+ '-circle')
            .fill(gradient);

        self._el = bcg;
    }

    animate(callback) {
        let self = this;
        let el = self._el;
        el.animate(
            {
                ease: 'quintInOut',
                delay: '0.75s'
            }).scale(0, 0).after(function () {

            if(typeof callback == "function" ) {
                callback();
            }
        })
    }

    resize(width, height) {
        let self = this;
        let bcg = self._el;
        let radius = Utils.getHypotenuse(width / 2, height / 2);
        bcg.select('circle').size(radius * 2).center(width / 2, height / 2);
    }
}

/**
 * @class
 * @memberOf HeaderSvg
 */
export class Pattern {
    constructor(svg, prefix) {
        this._el = null;
        this._svg = svg;
        this._prefix = prefix;
    }

    draw() {
        let self = this;
        let svg = self._svg;
        let id = self._prefix + '-pattern'

        let pattern_group = svg.group();
        self._el = pattern_group.pattern(3, 3, function (add) {
            add.rect(3, 3).fill('none');
            add.circle(2).move(1.5, 1.5).fill('#212121')
        })
            .attr('id', id);

    }

}

/**
 * @class
 * @memberOf HeaderSvg
 */
export class MorphText {
    constructor(svg, prefix, sentence, position, fill) {
        this._el = null;
        this._svg = svg;
        this._prefix = prefix;
        this._sentence = sentence;
        this._position = position;
        this._fill = fill;
        this._loaded = false;
    }

    draw() {
        let self = this;
        let svg = self._svg;
        let id = self._prefix+'-morphText-box';
        let sentence = self._sentence;
        let position = self._position;
        let fill = self._fill;

        let texts = svg.group().attr('id', id);

        new SVG.SVGFont('/static/font/raleway-bold.svg', function () {
            self._el = texts.morphText(sentence)
                .font({
                    family: this,
                    size: 60
                })
                .center(position.x, position.y)
                .fill(fill);
                self._el.animate().text('antonin');

            console.log(self._el)
            self._loaded = true;
        });
    }

    animate(newText) {
        let self = this;
        console.log(self._el.text());
        self._el.animate().text(newText);
    }
}
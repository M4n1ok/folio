<style>

    /*@group SITE*/
    .site-container {
        width: 100%;
        max-width: 1368px;
        margin: 0 auto;
        padding: 0 4em;
    }

    /*@end SITE*/

    /*@group ASIDE*/

    .svg--pattern {
        fill: url("#DOT_PATTERN");
    }

    /*@end ASIDE*/

    .aside-container {
        position: fixed;
        width: 25%;
        height: 100vh;
    }

    .current-section--title {
        display: block;
        width: 100%;
        height: 100%;
    }

    .current-section--title .svg--container {
        height: 100%;
        padding: 25px 0;
        /*opacity: .75;*/
    }

    .current-section--title .svg--container g {
        fill: url(#DOT_PATTERN);
        /*fill: url(#lgrad);*/
        /*fill: #222222;*/
    }

    /*@group MAIN*/

    .main-container {
        padding-left: 30%;
    }

    /*@group HEADER-MAIN*/
    .header-main {
        position: relative;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
        height: 100vh;
    }

    .header-main__content {
        margin-top: auto;
        padding-top: 100px;
    }

    .header-main__animation {
        position: absolute;
        display: block;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        /*z-index: 2;*/
        will-change: auto;
    }

    .header-main__title {
        font-size: 1.55em;
        line-height: 1.6em;
        font-weight: 200;
    }

    .header-main__name {
        font-weight: 700;
    }

    .header-main__link {
        position: relative;
        padding: 3px;
        text-decoration: none;
        transition: color .250s ease-out, padding .250ms ease;
        Z-index: 1;
    }

    .header-main__link:hover {
        color: #ffee58;
    }

    .header-main__link::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        background-color: #222222;
        transform-origin: 50% 100%;
        transform: scaleX(.99) scaleY(.1);
        transition: transform .250s ease, margin .250s ease;
        z-index: -1;
    }

    .header-main__link:hover::after {
        margin-top: 0px;
        transform: scaleX(1) scaleY(1);
    }

    .header-main__nav {
        position: relative;
        margin-top: auto;
        padding-bottom: 50px;
    }

    .header-main__link-works {
        position: relative;
        font-weight: 700;
        font-size: 2em;
        text-decoration: none;
    }

    .header-main__link-works::after {
        content: "see my projects";
        margin-left: 10px;
        display: inline-block;
        padding-top: 9px;
        font-weight: 200;
        font-size: .5em;
        color: #222222;
        opacity: .75;
        vertical-align: top;
        transform-origin: 0 50%;
        transform: scale(0);
        transition: transform .250s ease, opacity .200s ease-out;
    }

    .header-main__link-works:hover {
        color: #ffee58;
    }

    .header-main__link-works:hover::after {
        opacity: 1;
        transform: scale(1);
    }

    /*@end HEADER-MAIN*/

    /*@group PROJECTS*/
    .projects {
    }

    .projects__container {
    }

    .projects__content {
        width: 100%;
        min-height: 100vh;
    }

    .projects__by-year {

    }

    .projects__year {
        margin: 2em 0 2rem;
        font-weight: 700;
        font-size: 2em;
        letter-spacing: .1em;
    }

    .projects__year::after {
        content: "";
        display: block;
        margin-top: 0.5rem;
        width: 100%;
        height: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 8 8'%3E%3Cg fill='%23424242' fill-opacity='0.7'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
    }

    /*@end PROJECTS*/

    /*@group ABOUT*/
    .about {
        display: flex;
        align-items: center;
        min-height: 100vh;
    }

    .about__container {
        width: 100%;
        padding: 4em 0;
        font-size: 1.55em;
        line-height: 1.65em;
        font-weight: 200;
    }

    .about__container::before {
        content: "";
        display: block;
        margin-bottom: 4em;
        width: 100%;
        height: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 8 8'%3E%3Cg fill='%23424242' fill-opacity='0.7'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
    }

    .about__container p {
        max-width: 650px;
        margin-bottom: 2rem;
    }

    .about__container p:last-child {
        margin-bottom: 1rem;
    }

    .about__info {
        font-weight: 700;
    }

    .about__link {
        position: relative;
        padding: 3px;
        text-decoration: none;
        transition: color .250s ease-out, padding .250ms ease;
        Z-index: 1;
    }

    .about__link:hover {
        color: #ffee58;
    }

    .about__link::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        background-color: #222222;
        transform-origin: 50% 100%;
        transform: scaleX(.99) scaleY(.1);
        transition: transform .250s ease, margin .250s ease;
        z-index: -1;
    }

    .about__link:hover::after {
        margin-top: 0px;
        transform: scaleX(1) scaleY(1);
    }

    .about__contact-links li{
        display: inline-block;
        margin-right: 1rem;
    }

    /*@end ABOUT*/
    /*@end MAIN*/
</style>

<template>
    <div class="site-container">
        <aside class="aside-container">
            <div class="current-section--title">
                <svg :id="section_title.id" class="svg--container" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 188 820">
                     <!--viewBox="0 0 188 705">-->
                    <defs>
                        <pattern id="DOT_PATTERN" data-name="01-DOT_PATTERN" width="2" height="2"
                                 patternUnits="userSpaceOnUse"
                                 viewBox="0 0 5 5">
                            <rect fill="none" width="3" height="3"/>
                            <circle fill="424242" cx="1.5" cy="1.5" r="1"/>
                        </pattern>
                        <!--todo : remove for prod-->
                        <linearGradient id="lgrad" x1="0%" y1="100%" x2="0%" y2="0%" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" style="stop-color:rgb(253,160,133);stop-opacity:1"/>
$                            <stop offset="100%" style="stop-color:rgb(255,242,117);stop-opacity:1"/>
                        </linearGradient>
                    </defs>
                    <g id="about" style="visibility: hidden;">
                        <path id="about-0" d="M90.5,155.25H2.25v-49.5h15C6.25,97.5,0,84,0,66,0,37,17.25,20,42.75,20,69,20,83.5,38.25,84,72.5v33.25h.5c11.25,0,18-8,18-23.5,0-10.75-3.25-26-9.75-41l33.5-12.5c9,22.25,14,44.25,14,65.5C140.25,132.5,122,155.25,90.5,155.25ZM47,105.75H59.25v-23c0-10-4.25-15.25-12.75-15.25S33,73,33,82.75C33,93,38.5,102,47,105.75Z"/>
                        <path id="about-1" d="M69.5,340.25c-41.75,0-69-24.25-69-61.75,0-16,6.25-29.25,17.5-38.5H2.25V189.5h185.5V240H122.5c11.25,9,17.5,22,17.5,37.25C140,315.25,112,340.25,69.5,340.25Zm1.25-51c18,0,30.25-9.75,30.25-24.75C101,250,88.75,240,70.75,240S40.5,250,40.5,264.5C40.5,279.5,52.75,289.25,70.75,289.25Z"/>
                        <path id="about-2" d="M70.25,507.25c-42,0-69.75-29.75-69.75-75.5S28.25,356,70.25,356C112.5,356,140,386,140,431.75S112.5,507.25,70.25,507.25ZM69.75,407c-18.25,0-30.25,9.75-30.25,24.75,0,14.75,12,24.5,30.25,24.5,18,0,30.25-9.75,30.25-24.5C100,416.75,87.75,407,69.75,407Z"/>
                        <path id="about-3" d="M2.25,670V619.5H22.5C8,610.25,0,596,0,577.75c0-28.5,20.25-48,52-48h86.25v50.5h-72C53,580.25,44.5,587.5,44.5,598.5c.25,13,11,21,26.5,21h67.25V670Z"/>
                        <path id="about-4" d="M8.75,799.75C3.25,790.25,0,775.75,0,762c-.25-29,16.5-48.5,44.75-48.5H99V694.75h32.25V713.5H169v50.25H131.25v33.5H99v-33.5H52.5c-8.75,0-13,4.5-13,11.5,0,4,1.75,9.5,4,15.5Z"/>
                    </g>
                    <g id="works" style="visibility: hidden;">
                        <path id="works-0" d="M2.25,144.75l78-22.5-78-23V49.5L138.25,0V51.25L51.5,75.75l86.75,23.5v47.5L51.5,171l86.75,24v49l-136-49.5Z"/>
                        <path id="works-1" d="M70.25,400C28.25,400,.5,370.25.5,324.5s27.75-75.75,69.75-75.75c42.25,0,69.75,30,69.75,75.75S112.5,400,70.25,400Zm-.5-100.25c-18.25,0-30.25,9.75-30.25,24.75,0,14.75,12,24.5,30.25,24.5,18,0,30.25-9.75,30.25-24.5C100,309.5,87.75,299.75,69.75,299.75Z"/>
                        <path id="works-2" d="M116.75,476.75c15,9.5,23.5,24.25,23.5,42.75H94.75c3.25-26-7.75-42.75-27.5-42.75h-65v-50.5h136v50.5Z"/>
                        <path id="works-3" d="M38.75,595.25H2.25v-50.5h185.5v50.5H97.5l40.75,37.5v57L85.75,640,2.25,690V630.25L49.5,605.5Z"/>
                        <path id="works-4" d="M124,819.75,92.25,803c9.5-18.5,14.25-33.75,14.25-44.5,0-6.25-2.25-10.25-6.5-10.25-15.25,0-8.5,71-55,71C17,819.25,0,795,0,759.5c0-24,6.5-46.25,19.25-64L51,711c-11,17-16.75,34.25-16.75,49.25,0,6.75,2,11.25,6.25,11.25,15.5,0,8-69.5,54.5-69.5,28.5,0,45.5,23.75,45.5,58A119.59,119.59,0,0,1,124,819.75Z"/>
                    </g>
                    <g id="hello" style="visibility: hidden;">
                        <path id="hello-0" d="M88,225.13H1.75v-50.5H73.5c13.5,0,22-7.5,22-19.5-.25-13.75-11-22.25-26.5-22.25H1.75V82.38h185.5v50.5h-70.5c15,9.5,23,24.25,23,43.25C139.75,205.38,119.5,225.13,88,225.13Z"/>
                        <path id="hello-1" d="M57.5,390.13v-91.5c-13,4-20.25,13.5-20.25,26.5,0,10.75,4.75,21,13,30L24.5,381.38C8.75,367.13,0,346.63,0,320.88c0-45.5,27.5-73.25,69.25-73.25,42.5,0,70.25,28.75,70.25,71.75C139.5,367.13,107.5,393.13,57.5,390.13Zm24.75-49.75c13.5.25,23-8.25,23-20.5,0-11.75-9.25-19.75-23-22.25Z"/>
                        <path id="hello-2" d="M1.75,417.87h185.5v50.5H1.75Z"/>
                        <path id="hello-3" d="M1.75,507.87h185.5v50.5H1.75Z"/>
                        <path id="hello-4" d="M69.75,737.37c-42,0-69.75-29.75-69.75-75.5s27.75-75.75,69.75-75.75c42.25,0,69.75,30,69.75,75.75S112,737.37,69.75,737.37Zm-.5-100.25C51,637.12,39,646.87,39,661.87c0,14.75,12,24.5,30.25,24.5,18,0,30.25-9.75,30.25-24.5C99.5,646.87,87.25,637.12,69.25,637.12Z"/>
                    </g>

                </svg>
            </div>
        </aside>
        <main class="main-container">
            <header id="hello-section" ref="hello" class="header-main">
                <!--<div :id="section_title.id" class="header-main__animation"></div>-->
                <div class="header-main__content">
                    <h1 class="header-main__title">
                        I'm <span class="header-main__name">Antonin</span>. <br>
                        A young french fullstack developer,<br>working at <a class="header-main__link" href="http://www.datagif.fr/"
                                                                             target="_blank">Datagif</a>,
                        studying at
                        <a class="header-main__link" href="https://www.gobelins.fr/" target="_blank">Gobelins Paris</a>.
                    </h1>
                </div>
                <div class="header-main__nav">
                    <a class="header-main__link-works" href="#projects">&#8595;</a>
                </div>
            </header>
            <section id="projects-section" ref="works" class="projects">
                <div class="projects__container">
                    <div class="projects__by-year" v-for="item in projects">
                        <h3 class="projects__year">{{item.year}}</h3>
                        <ul class="projects__list">
                            <project-small-component v-for="project in item.projects" :project="project"
                                                     :key="project.name"></project-small-component>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="about-section" ref="about" class="about">
                <div class="about__container">
                    <p>I'm <span class="about__info">Antonin Caudron</span>, <br>a 23<sup>y/o</sup> french developer living in <span class="about__info">Paris</span>.</p>
                    <p>I'm working at <a class="about__link" href="http://www.datagif.fr/" target="_blank">Datagif</a> and studying interactive development at
                        <a class="about__link" href="https://www.gobelins.fr/" target="_blank">Gobelins</a>.<br>
                        I love playing with <span class="about__info">datas processing</span>, <span
                                class="about__info">Javascript</span>... and <span class="about__info">challenging me</span>. <br>
                        I'm currently learning <span class="about__info">Swift</span> and <span class="about__info">IOS development</span> with image recognition. It's so amazing.
                    </p>
                    <p>I'm also a <a class="about__link" href="#" target="_blank">tennis player</a>, a music fan, a beer lover and new technologies explorer.</p>
                    <p>I'm currently looking for an <span class="about__info">alternance</span> for two next years.</p>
                    <p class="about__info">Feel free to contact me:</p>
                    <ul class="about__contact-links">
                        <li><a class="about__link" href="mailTo:antonin.caudron@gmail.com">Email</a></li>
                        <li><a class="about__link" href="https://github.com/M4n1ok" target="_blank" rel="nofollow">Github</a></li>
                        <li><a class="about__link" href="https://www.linkedin.com/in/antonincaudron/" target="_blank" rel="nofollow">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import HeaderSvg from './../classes/HeaderSvg.js';
    import ProjectSmall from './ProjectSmall.vue';

    export default {
        name: 'home',
        data () {
            return {
                svg_id: 'header-svg-container',
                headerSvg: null,
                projects: window._DATA,
                section_title: {
                    svg: null,
                    id: "svg-section-title",
                    morph_ids: ['hello', 'about', 'works'],
                    options: {
                        duration: 350,
                        easing: 'sine-in-out',
                        rotation: 'clock'
                    }
                },
                sections_id: ['hello-section', 'projects-section', 'about-section'],
                inView: 'about'
            }
        },
        mounted() {
            let self = this;
            self.section_title.svg = new SVGMorpheus('#' + self.section_title.id);

            //Scroll event listener
            let lastScroll;

            window.addEventListener('scroll', function (event) {
                let scroll = window.pageYOffset;
                for (let id in self.$refs) {
                    let el = self.$refs[id];
                    let elTop = el.getBoundingClientRect().top;
                    let elBottom = el.getBoundingClientRect().bottom;

//                  animate morph to current section in view
                    if (scroll > lastScroll) {
                        if (id != self.inView && (elTop >= 0 && elTop <= window.innerHeight - window.innerHeight / 4)) {
                            self.section_title.options.rotation = 'clock';
                            self.section_title.svg.to(id, self.section_title.options);
                            self.inView = id;
                        }
                    } else {
                        if (id != self.inView && (elBottom >= window.innerHeight / 4 && elBottom <= window.innerHeight)) {
                            self.section_title.options.rotation = 'counterclock';
                            self.section_title.svg.to(id, self.section_title.options);
                            self.inView = id;
                        }
                    }

                }

                lastScroll = scroll;
//
            })
        },
        methods: {
            getImgPath(file) {
                return 'static/img/' + file + '.png';
            }
        },
        components: {
            'project-small-component': ProjectSmall
        }
    }
</script>


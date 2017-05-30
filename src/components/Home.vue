<style>

    /*@group SITE*/
    .site-container {
        width: 100%;
        max-width: 1368px;
        margin: 0 auto;
        padding: 0 4em;
    }

    @media (max-width: 767px) {
        .site-container {
            padding: 0 2em;
        }
    }

    @media (max-width: 425px) {
        .site-container {
            padding: 0 1em;
        }
    }

    /*@end SITE*/

    /*@group ASIDE*/

    .svg--pattern {
        fill: url("#DOT_PATTERN");
    }

    .aside-container {
        position: fixed;
        display: flex;
        align-items: center;
        width: 25%;
        height: 100vh;
    }

    .current-section--title {
        display: block;
        width: 100%;
        height: 100%;
        will-change: auto;
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

    .current-section__bullet-container {
        margin-right: 1.5rem;
    }

    .current-section__bullet {
        position: relative;
        display: block;
        width: 6px;
        height: 6px;
        background-color: rgba(34, 34, 34, 0.4);
        margin-bottom: 10px;
        border-radius: 50%;
        transition: backdrounf 500ms ease;
    }

    .current-section__bullet::after {
        content: "";
        display: block;
        position: absolute;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #222222;
        transform-origin: 50% 50%;
        transform: scale(0);
        transition: transform 300ms ease;
    }

    .current-section__bullet:last-child {
        margin-bottom: 0;
    }

    .current-section__bullet-active {
        opacity: .85;
    }

    .current-section__bullet-active::after {
        transform: scale(1);
    }

    .current-section__bullet:hover {
        opacity: .85;
        background-color: rgba(34, 34, 34, 0.85);
    }

    .current-section__bullet a {
        display: block;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 767px) {
        .aside-container {
            width: auto;
        }

        .current-section--title .svg--container {
            padding: auto;
            opacity: 0.4;
        }
    }

    /*@end ASIDE*/

    /*@group MAIN*/

    .main-container {
        position: relative;
        margin-left: 30%;
        z-index: 2;
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

    .header-main__link-works::before {
        position: absolute;
        content: "click or scroll ¯\\_(ツ)_/¯ ";
        width: 115px;
        top: 50%;
        left: calc(100% + 10px);
        display: inline-block;
        font-weight: 200;
        font-size: .5em;
        color: #222222;
        opacity: .75;
        vertical-align: top;
        text-align: center;
        transform-origin: 0 50%;
        transform: scale(0) translateY(-50%);
        transition: transform .250s ease, opacity .200s ease-out;
    }

    .header-main__link-works::after {
        transform: scaleX(.99) scaleY(0);
    }

    .header-main__link-works:hover::before {
        opacity: 1;
        transform: scale(1) translateY(-50%);
    }

    @media (max-width: 767px) {
        .main-container {
            margin-left: calc(3rem + 6px);
        }
    }

    @media (max-width: 425px) {
        .header-main__title {
            font-size: 1.2em;
            line-height: 1.35em;
        }
    }

    /*@end HEADER-MAIN*/

    /*@group PROJECTS*/
    .projects {
        padding-top: 50px;
        margin-bottom: 4rem;
    }

    .projects__container {
    }

    .projects__content {
        width: 100%;
        min-height: 100vh;
    }

    .projects__by-year {
        margin-bottom: 4em;
    }

    .projects__by-year:last-child {
        margin-bottom: 0;
    }

    .projects__year {
        margin-bottom: 2rem;
        font-weight: 700;
        font-size: 2em;
        letter-spacing: .1em;
        opacity: 0;
        transform: translate(10px);
        transition: opacity 350ms ease, transform 250ms cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    .projects__year.in-viewport {
        opacity: 1;
        transform: translate(0px);
    }


    .projects__year::after {
        content: "";
        display: block;
        margin-top: 0.5rem;
        width: 0%;
        height: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 8 8'%3E%3Cg fill='%23424242' fill-opacity='0.7'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
        transition: width 500ms ease;
    }

    .projects__year.in-viewport::after {
        width: 100%;
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
        padding: 0 0 4em;
        font-size: 1.55em;
        line-height: 1.65em;
        font-weight: 200;
    }

    .about__container::before {
        content: "";
        display: block;
        margin-bottom: 4em;
        width: 0%;
        height: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 8 8'%3E%3Cg fill='%23424242' fill-opacity='0.7'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
        transition: width 300ms ease;
    }

    .about__container.in-viewport::before {
        width: 100%;
    }

    .about__container p {
        max-width: 650px;
        margin-bottom: 1.5rem;
        opacity: 0;
        transform: scaleY(0);
        transition: transform 600ms cubic-bezier(0.190, 1.000, 0.220, 1.000), opacity 300ms ease;
    }

    .about__container p.in-viewport {
        opacity: 1;
        transform: scaleY(1);
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

    .about__contact-links li {
        display: inline-block;
        margin-right: 1rem;
        opacity: 0;
        transform: translateX(-15px);
        transition: transform 350ms cubic-bezier(0.250, 0.460, 0.450, 0.940), opacity 300ms ease;
    }

    .about__contact-links.in-viewport li {
        opacity: 1;
        transform: translateX(0px);
    }

    @media (max-width: 767px) {
        .about__contact-links li {
            display: block;
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 425px) {
        .about__container {
            font-size: 1.2em;
            line-height: 1.35em;
        }
    }

    /*@end ABOUT*/
    /*@end MAIN*/

    /*@group TRANSITIONS*/

    .slide-fade-left-enter-active {
        transition: transform 450ms ease, opacity 300ms ease;
    }

    .slide-fade-left-enter, .slide-fade-left-leave-to {
        opacity: 0;
        transform: translateX(-25px);
    }

    .slide-fade-down-enter-active {
        transition: transform 600ms cubic-bezier(0.190, 1.000, 0.220, 1.000), opacity 300ms ease;
    }

    .slide-fade-down-enter, .slide-fade-down-leave-to {
        opacity: 0;
        transform: translateY(-50px);
    }

    .slide-fade-down-2-enter-active {
        transition: transform 600ms cubic-bezier(0.190, 1.000, 0.220, 1.000), opacity 700ms ease;
        transition-delay: 200ms;
    }

    .slide-fade-down-2-enter, .slide-fade-down-2-leave-to {
        opacity: 0;
        transform: translateY(-15px);
    }

    .grow-enter-active {
        transition: transform 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000), opacity 500ms ease;
        transition-delay: 150ms;
        transform-origin: 50% 50%;
    }

    .grow-enter, .grow-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    /*@end TRANSITIONS*/
</style>

<template>
    <div class="site-container">
        <aside class="aside-container">
            <div class="current-section__bullet-container">
                <transition name="grow" appear>
                    <ul>
                        <li class="current-section__bullet current-section__bullet-active" data-section="hello"><a
                                href="#hello-section"></a></li>
                        <li class="current-section__bullet" data-section="works"><a href="#works-section"></a></li>
                        <li class="current-section__bullet" data-section="about"><a href="#about-section"></a></li>

                    </ul>
                </transition>
            </div>
            <transition name="slide-fade-left" appear>
                <div class="current-section--title">
                    <svg :id="section_title.id" class="svg--container" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 188 820">
                        <defs>
                            <pattern id="DOT_PATTERN" data-name="01-DOT_PATTERN" width="4" height="4"
                                     patternUnits="userSpaceOnUse"
                                     viewBox="0 0 5 5">
                                <rect fill="none" width="3" height="3"/>
                                <circle fill="424242" cx="1.5" cy="1.5" r="1"/>
                            </pattern>
                        </defs>
                        <g id="about" style="visibility: hidden;">
                            <path id="about-0"
                                  d="M90.5,155.25H2.25v-49.5h15C6.25,97.5,0,84,0,66,0,37,17.25,20,42.75,20,69,20,83.5,38.25,84,72.5v33.25h.5c11.25,0,18-8,18-23.5,0-10.75-3.25-26-9.75-41l33.5-12.5c9,22.25,14,44.25,14,65.5C140.25,132.5,122,155.25,90.5,155.25ZM47,105.75H59.25v-23c0-10-4.25-15.25-12.75-15.25S33,73,33,82.75C33,93,38.5,102,47,105.75Z"/>
                            <path id="about-1"
                                  d="M69.5,340.25c-41.75,0-69-24.25-69-61.75,0-16,6.25-29.25,17.5-38.5H2.25V189.5h185.5V240H122.5c11.25,9,17.5,22,17.5,37.25C140,315.25,112,340.25,69.5,340.25Zm1.25-51c18,0,30.25-9.75,30.25-24.75C101,250,88.75,240,70.75,240S40.5,250,40.5,264.5C40.5,279.5,52.75,289.25,70.75,289.25Z"/>
                            <path id="about-2"
                                  d="M70.25,507.25c-42,0-69.75-29.75-69.75-75.5S28.25,356,70.25,356C112.5,356,140,386,140,431.75S112.5,507.25,70.25,507.25ZM69.75,407c-18.25,0-30.25,9.75-30.25,24.75,0,14.75,12,24.5,30.25,24.5,18,0,30.25-9.75,30.25-24.5C100,416.75,87.75,407,69.75,407Z"/>
                            <path id="about-3"
                                  d="M2.25,670V619.5H22.5C8,610.25,0,596,0,577.75c0-28.5,20.25-48,52-48h86.25v50.5h-72C53,580.25,44.5,587.5,44.5,598.5c.25,13,11,21,26.5,21h67.25V670Z"/>
                            <path id="about-4"
                                  d="M8.75,799.75C3.25,790.25,0,775.75,0,762c-.25-29,16.5-48.5,44.75-48.5H99V694.75h32.25V713.5H169v50.25H131.25v33.5H99v-33.5H52.5c-8.75,0-13,4.5-13,11.5,0,4,1.75,9.5,4,15.5Z"/>
                        </g>
                        <g id="works" style="visibility: hidden;">
                            <path id="works-0"
                                  d="M2.25,144.75l78-22.5-78-23V49.5L138.25,0V51.25L51.5,75.75l86.75,23.5v47.5L51.5,171l86.75,24v49l-136-49.5Z"/>
                            <path id="works-1"
                                  d="M70.25,400C28.25,400,.5,370.25.5,324.5s27.75-75.75,69.75-75.75c42.25,0,69.75,30,69.75,75.75S112.5,400,70.25,400Zm-.5-100.25c-18.25,0-30.25,9.75-30.25,24.75,0,14.75,12,24.5,30.25,24.5,18,0,30.25-9.75,30.25-24.5C100,309.5,87.75,299.75,69.75,299.75Z"/>
                            <path id="works-2"
                                  d="M116.75,476.75c15,9.5,23.5,24.25,23.5,42.75H94.75c3.25-26-7.75-42.75-27.5-42.75h-65v-50.5h136v50.5Z"/>
                            <path id="works-3"
                                  d="M38.75,595.25H2.25v-50.5h185.5v50.5H97.5l40.75,37.5v57L85.75,640,2.25,690V630.25L49.5,605.5Z"/>
                            <path id="works-4"
                                  d="M124,819.75,92.25,803c9.5-18.5,14.25-33.75,14.25-44.5,0-6.25-2.25-10.25-6.5-10.25-15.25,0-8.5,71-55,71C17,819.25,0,795,0,759.5c0-24,6.5-46.25,19.25-64L51,711c-11,17-16.75,34.25-16.75,49.25,0,6.75,2,11.25,6.25,11.25,15.5,0,8-69.5,54.5-69.5,28.5,0,45.5,23.75,45.5,58A119.59,119.59,0,0,1,124,819.75Z"/>
                        </g>
                        <g id="hello" style="visibility: hidden;">
                            <path id="hello-0"
                                  d="M88,225.13H1.75v-50.5H73.5c13.5,0,22-7.5,22-19.5-.25-13.75-11-22.25-26.5-22.25H1.75V82.38h185.5v50.5h-70.5c15,9.5,23,24.25,23,43.25C139.75,205.38,119.5,225.13,88,225.13Z"/>
                            <path id="hello-1"
                                  d="M57.5,390.13v-91.5c-13,4-20.25,13.5-20.25,26.5,0,10.75,4.75,21,13,30L24.5,381.38C8.75,367.13,0,346.63,0,320.88c0-45.5,27.5-73.25,69.25-73.25,42.5,0,70.25,28.75,70.25,71.75C139.5,367.13,107.5,393.13,57.5,390.13Zm24.75-49.75c13.5.25,23-8.25,23-20.5,0-11.75-9.25-19.75-23-22.25Z"/>
                            <path id="hello-2" d="M1.75,417.87h185.5v50.5H1.75Z"/>
                            <path id="hello-3" d="M1.75,507.87h185.5v50.5H1.75Z"/>
                            <path id="hello-4"
                                  d="M69.75,737.37c-42,0-69.75-29.75-69.75-75.5s27.75-75.75,69.75-75.75c42.25,0,69.75,30,69.75,75.75S112,737.37,69.75,737.37Zm-.5-100.25C51,637.12,39,646.87,39,661.87c0,14.75,12,24.5,30.25,24.5,18,0,30.25-9.75,30.25-24.5C99.5,646.87,87.25,637.12,69.25,637.12Z"/>
                        </g>
                    </svg>
                </div>
            </transition>

        </aside>
        <main class="main-container">
            <header id="hello-section" ref="hello" class="header-main">
                <transition name="slide-fade-down" appear>
                    <div class="header-main__content">
                        <h1 class="header-main__title">
                            I'm <span class="header-main__name">Antonin</span>, <br>
                            A young french fullstack developer,<br>working at <a class="header-main__link"
                                                                                 href="http://www.datagif.fr/"
                                                                                 target="_blank">Datagif</a> and
                            studying at
                            <a class="header-main__link" href="https://www.gobelins.fr/" target="_blank">Gobelins&nbsp;Paris</a>.
                        </h1>
                    </div>
                </transition>
                <transition name="slide-fade-down-2" appear>
                    <div class="header-main__nav">
                        <a id="header-main__link-works" class="header-main__link header-main__link-works"
                           data-section="works" href="#works-section">&#8595;</a>
                    </div>
                </transition>
            </header>
            <section id="works-section" ref="works" class="projects">
                <div class="projects__container">
                    <div class="projects__by-year" v-for="item in projects">
                        <h3 class="projects__year" v-in-viewport.once>{{item.year}}</h3>
                        <ul class="projects__list">
                            <project-small-component v-for="project in item.projects" :project="project"
                                                     :key="project.name"></project-small-component>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="about-section" ref="about" class="about">
                <div class="about__container" v-in-viewport.once>
                    <p v-in-viewport.once>I'm <span class="about__info">Antonin Caudron</span>, <br>a 23<sup>y/o</sup> french developer
                        living in <span class="about__info">Paris</span>.</p>
                    <p v-in-viewport.once>I'm currently working at <a class="about__link" href="http://www.datagif.fr/" target="_blank">Datagif</a>
                        and studying interactive development at
                        <a class="about__link" href="https://www.gobelins.fr/" target="_blank">Gobelins</a>.<br>
                        I love playing with <span class="about__info">Data processing</span>, <span
                                class="about__info">Javascript</span>... and <span class="about__info">challenging myself</span>.
                        <br>
                        Presently, I'm learning <span class="about__info">Swift</span> and <span class="about__info">IOS development</span>
                        with image recognition. It's so amazing!
                    </p>
                    <p v-in-viewport.once>I'm also a <span class="">tennis&nbsp;player</span>, a <span
                            class="">music&nbsp;fan</span>, a <span
                            class="">beer&nbsp;lover</span> and an explorer of new technologies.</p>
                    <!---->
                    <!--<p>I'm also a <span class="about__link about__link-myself" href="#">tennis&nbsp;player</span>, a <span-->
                    <!--class="about__link about__link-myself" href="#">music&nbsp;fan</span>, a <span-->
                    <!--class="about__link about__link-myself" href="#">beer&nbsp;lover</span> and an explorer of new technologies.</p>-->

                    <p v-in-viewport.once>I'm currently looking for an <span class="about__info">alternance</span> for the next two years.
                    </p>
                    <p v-in-viewport.once class="about__info">Feel free to contact me:</p>
                    <ul class="about__contact-links" v-in-viewport.once="20">
                        <li><a class="about__link" href="mailTo:antonin.caudron@gmail.com">Email</a></li>
                        <li><a class="about__link" href="https://github.com/M4n1ok" target="_blank" rel="nofollow">Github</a>
                        </li>
                        <li><a class="about__link" href="https://www.linkedin.com/in/antonincaudron/" target="_blank"
                               rel="nofollow">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import ProjectSmall from './ProjectSmall.vue';

    export default {
        name: 'home',
        data () {
            return {
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
                section_bullets: null,
                sections_id: ['hello-section', 'projects-section', 'about-section'],
                inView: 'hello'
            }
        },
        mounted() {
            let self = this;

            self.section_bullets = document.getElementsByClassName('current-section__bullet');
            self.section_title.svg = new SVGMorpheus('#' + self.section_title.id);


            //ScrollTo on bullets
            addClickEventOnBullets(self.section_bullets);

            let headerMainLinks = document.getElementsByClassName('header-main__link-works');
            addClickEventOnBullets(headerMainLinks);

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
                        if (id != self.inView && (elTop >= 0 && elTop <= window.innerHeight - window.innerHeight / 2)) {
                            self.section_title.options.rotation = 'clock';
                            self.section_title.svg.to(id, self.section_title.options);
                            self.inView = id;
                            activeSectionBullet(self.section_bullets, self.inView)
                        }
                    } else {
                        if (id != self.inView && (elBottom >= window.innerHeight / 2 && elBottom <= window.innerHeight)) {
                            self.section_title.options.rotation = 'counterclock';
                            self.section_title.svg.to(id, self.section_title.options);
                            self.inView = id;
                            activeSectionBullet(self.section_bullets, self.inView)
                        }
                    }

                }

                lastScroll = scroll;

            });

        },
        components: {
            'project-small-component': ProjectSmall
        }
    }


    function scrollIt(destination, duration = 200, easing = 'linear', callback) {

        const easings = {
            linear(t) {
                return t;
            },
            easeInQuad(t) {
                return t * t;
            },
            easeOutQuad(t) {
                return t * (2 - t);
            },
            easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
            easeInCubic(t) {
                return t * t * t;
            },
            easeOutCubic(t) {
                return (--t) * t * t + 1;
            },
            easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart(t) {
                return t * t * t * t;
            },
            easeOutQuart(t) {
                return 1 - (--t) * t * t * t;
            },
            easeInOutQuart(t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
            },
            easeInQuint(t) {
                return t * t * t * t * t;
            },
            easeOutQuint(t) {
                return 1 + (--t) * t * t * t * t;
            },
            easeInOutQuint(t) {
                return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
            }
        };

        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            if (callback) {
                callback();
            }
            return;
        }

        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (window.pageYOffset === destinationOffsetToScroll) {
                if (callback) {
                    callback();
                }
                return;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    }

    function addClickEventOnBullets(el) {
        for (let i = 0; i < el.length; i++) {
            let bullet = el[i];
            bullet.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                let from_id = bullet.getAttribute('data-section') + '-section';
                scrollIt(
                    document.getElementById(from_id),
                    250,
                    'easeInCubic')
            })
        }
    }

    function activeSectionBullet(bullets, id) {
        for (let i = 0; i < bullets.length; i++) {
            let section = bullets[i].getAttribute('data-section');
            if (section === id) {
                bullets[i].classList.add('current-section__bullet-active');
            } else {
                bullets[i].classList.remove('current-section__bullet-active');
            }
        }
    }
</script>


<style>
    /*@group PROJECT SMALL*/
    .project__item {
        position: relative;
        display: block;
        max-width: 650px;
        margin-bottom: 2.5em;
        padding-right: 1em;
    }

    .project__item:last-child {
        margin-bottom: 0;
    }

    .project__item::after {
        content: "";
        display: block;
        width: 0px;
        height: 1px;
        margin-top: 1em;
        background-color: #222222;
        transition: width 250ms cubic-bezier(0.470, 0.000, 0.745, 0.715);
        transition-delay: 50ms;
    }

    .project__item.in-viewport::after {
        width: 70px;
    }

    .project__item.in-viewport:hover::after {
        width: 125px;
    }

    .project__item a {
        text-decoration: none;
    }

    .project__item article {
        position: relative;
    }

    .project__item aside {
        position: relative;
        width: 25%;
        background: linear-gradient(170deg, rgba(255, 182, 84, 0.66) 50%, rgba(255, 242, 117, 0.7) 100%);
        box-shadow: 2px 2px 15px 2px rgba(34, 34, 34, 0.15);
        border-radius: 2px;
    }

    .project__item aside::after {
        content: '';
        display: block;
        padding-bottom: 80%;
    }

    .project__item main {
        opacity: 0;
        padding-left: 15px;
        transform: skew(-6deg, 0deg);
        transition: transform 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000), opacity 350ms ease, padding 350ms cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    .project__item.in-viewport:hover main {
        transform: skew(-6deg, 0deg);
    }

    .project__item.in-viewport main {
        padding-left: 0px;
        transform: skew(0deg, 0deg);
        opacity: 1;
    }

    .project__name {
        display: inline-block;
        font-family: Trueno, sans-serif;
        font-weight: 800;
        font-size: 5rem;
        line-height: 4.5rem;
        text-transform: lowercase;
        margin-bottom: 1rem;
    }

    .project__info {
        bottom: 0;
        font-weight: 200;
        font-size: 1em;
        letter-spacing: .015em;
        transition: opacity 400ms ease;
        transition-delay: 150ms;
    }

    .project__info.in-viewport {
        opacity: 1;
    }

    .project__img-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 65%;
        padding: 10px;
        background-position: center center;
        background-blend-mode: hue;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0;
        border: 1px dotted #222222;
        border-radius: 3px;
        /*background-color: rgba(247, 247, 247, 0.25);*/
        /*box-shadow: 2px 2px 20px 0px #fda085;*/
        /*box-shadow: 2px 2px 15px 3px #fda085;*/
        box-shadow: 2px 2px 15px 3px rgba(255, 182, 84, 0.45);
        transform: translateX(-50%) translateY(-50%) scale(0);
        transition: left 200ms cubic-bezier(0.470, 0.000, 0.745, 0.715), opacity 200ms ease, transform 250ms cubic-bezier(0.860, 0.000, 0.070, 1.000);
    }

    .project__img {
        visibility: hidden;
    }

    .project__item:hover .project__img-container {
        opacity: .9;
        left: 55%;
        transform: translateX(-50%) translateY(-50%) scale(1);
    }

    @media (max-width: 767px) {

        .project__item {
            margin-bottom: 2em;
        }

        .project__name {
            font-size: 3.5rem;
            line-height: 3rem;
        }

    }

    @media (max-width: 425px) {

        .project__item {
            margin-bottom: 2em;
            padding-right: 1em;
        }

        .project__name {
            font-size: 2.5rem;
            line-height: 2rem;
        }

    }

    /*@end PROJECT SMALL*/
</style>
<template>
    <li class="project__item" v-in-viewport.once>
        <a v-if="project.link" :href="project.link" target="_blank">
            <article>
                <main>
                    <h2 class="project__name">{{project.name}}</h2>
                    <div class="project__info">
                        <span class="project__category">{{project.category}}</span>
                        &#8212;
                        <span class="project__technos">{{project.technos}}</span>
                    </div>
                </main>
                <figure class="project__img-container" :style="background">
                    <img class="project__img" :src="getImgPath" :alt="project.name">
                    <div class="project__img-overlay"></div>
                </figure>
            </article>
        </a>
        <article v-else="">
            <main>
                <h2 class="project__name">{{project.name}}</h2>
                <div class="project__info">
                    <span class="project__category">{{project.category}}</span>
                    &#8212;
                    <span class="project__technos">{{project.technos}}</span>
                </div>
            </main>
            <figure class="project__img-container" :style="background">
                <img class="project__img" :src="getImgPath" :alt="project.name">
                <div class="project__img-overlay"></div>
            </figure>
        </article>
    </li>
</template>
<script>
    export default {
        props: {
            project: Object
        },
        computed: {
            background() {
                let self = this;
                return {
                    backgroundImage: 'url(' + self.getImgPath + ')'
                }
            },
            getImgPath() {
                let self = this;
                return 'static/img/' + self.project.image;
            }
        },
    }
</script>
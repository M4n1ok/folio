<style>
    /*@group PROJECT SMALL*/
    .project__item {
        /*display: flex;*/
        margin-bottom: 2.5em;
        /*background-color: rgba(247, 247, 247, 0.25);*/
        /*background: linear-gradient(to bottom, #ffb654 50%, #fff275 100%);*/
        /*box-shadow: 2px 2px 20px 0px #fda085;*/
        /*box-shadow: 2px 2px 15px 3px #fda085;*/
        /*box-shadow: 2px 2px 15px 3px rgba(253, 160, 133, 0.45);*/
    }

    .project__item:last-child {
        margin-bottom: 0;
    }

    .project__item::after {
        content: "";
        display: block;
        width: 70px;
        height: 1px;
        display: block;
        margin-top: 1em;
        background-color: #222222;
    }

    .project__item a {
        text-decoration: none;
    }

    .project__item aside {
        position: relative;
        flex-basis: 60%;
        background: linear-gradient(170deg, rgba(255, 182, 84, 0.66) 50%, rgba(255, 242, 117, 0.7) 100%);
        box-shadow: 2px 2px 15px 2px rgba(34, 34, 34, 0.15);
        border-radius: 2px;
    }

    .project__item main {
        /*width: 40%;*/
    }

    .project__item aside::after {
        content: '';
        display: block;
        padding-bottom: 80%;
    }

    .project__item main {

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
    }

    .project__img-container {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-blend-mode: hue;
        border-radius: 2px;
    }

    .project__img {
        visibility: hidden;

    }

    .project__img-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        /*background: linear-gradient(to bottom, #ffee58 50%, #fff8e1 100%);*/
        /*background-image: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);*/
        /*opacity: 0.45;*/
        /*mix-blend-mode: lighten;*/
    }

    /*@end PROJECT SMALL*/
</style>
<template>
    <li class="project__item">
        <a :href="project.link" target="_blank">
            <article>
                <figure class="project__img-container" :style="background">
                    <img class="project__img" :src="getImgPath" :alt="project.name">
                    <div class="project__img-overlay"></div>
                </figure>
                <main>
                    <!--<span class="project__date">{{project.year}}</span>-->
                    <h2 class="project__name">{{project.name}}</h2>
                    <div class="project__info">
                        <span class="project__category">{{project.category}}</span>
                        &#8212;
                        <span class="project__technos">{{project.technos}}</span>
                    </div>
                </main>
            </article>
        </a>
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
                    background: 'linear-gradient(170deg, rgba(255, 182, 84, 0.1) 50%, rgba(255, 242, 117, 0.1) 100%), center center / auto auto no-repeat url(static/img/' + self.project.image + '.png)'
                }
            },
            getImgPath() {
                let self = this;
                return 'static/img/' + self.project.image + '.png'
            }
        },
    }
</script>
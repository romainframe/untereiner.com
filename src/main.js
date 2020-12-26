// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
// import Unicon from 'vue-unicons'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import 'vue-unicons/dist/vue-unicons-ssr.css'


import {
    uniFacebookFMonochrome,
    uniTwitterMonochrome,
    uniTumblrMonochrome,
    uniKeySkeletonMonochrome,
    uniAtMonochrome,
    uniLinkedinAltMonochrome,
    uniGithubAltMonochrome,
    uniInstagramMonochrome,
    uniDiscordMonochrome
} from 'vue-unicons/src/icons'
Unicon.add([uniFacebookFMonochrome, uniTwitterMonochrome, uniTumblrMonochrome, uniKeySkeletonMonochrome, uniAtMonochrome, uniLinkedinAltMonochrome, uniGithubAltMonochrome, uniInstagramMonochrome, uniDiscordMonochrome])


export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    Vue.use(VueScrollTo, {
        duration: 500,
        easing: "ease",
    })

    Vue.use(VueFuse)

    Vue.use(Unicon, {
        fill: 'deeppink',
        height: 20,
        width: 20
    })

    head.meta.push({
        name: 'keywords',
        content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
    })

    head.meta.push({
        name: 'description',
        content: 'Untereiner.com'
    })

    head.meta.push({
        name: 'author',
        content: 'Romain Untereiner'
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
    })
}
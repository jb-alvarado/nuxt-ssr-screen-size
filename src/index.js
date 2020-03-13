import NuxtSSRScreenSizeMixin from './nuxt-ssr-screen-size'

const install = (Vue) => {
    Vue.mixin(NuxtSSRScreenSizeMixin)
}

// Note that here we're not only exporting the install function, but
// also the mixin itself - this is so with can `Vue.use()` or
// `mixins: [],` it.
export default { install, NuxtSSRScreenSizeMixin }

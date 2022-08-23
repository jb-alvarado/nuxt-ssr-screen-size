import Vue from 'vue';

var reactiveComponent = new Vue({
    data: function data() {
        return {
            event: null,
            vssWidth: null,
            vssHeight: null
        }
    }
});

var NuxtSSRScreenSizeMixin = {
    computed: {
        $vssEvent: function $vssEvent() {
            return reactiveComponent.event
        },
        $vssWidth: function $vssWidth() {
            return reactiveComponent.vssWidth || this.getScreenWidth()
        },
        $vssHeight: function $vssHeight() {
            return reactiveComponent.vssHeight || this.getScreenHeight()
        }
    },
    methods: {
        getScreenWidth: function getScreenWidth() {
            return typeof window === "undefined" && 1024
            || window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth
        },
        getScreenHeight: function getScreenHeight() {
            return typeof window === "undefined" && 768
            || window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight
        },
        handleResize: function handleResize(event) {
            reactiveComponent.event = event;
            reactiveComponent.vssWidth = this.getScreenWidth();
            reactiveComponent.vssHeight = this.getScreenHeight();
        },

        $vssDestroyListener: function $vssDestroyListener() {
            window.removeEventListener('resize', this.handleResize);
        }
    },
    mounted: function mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
};

var install = function (Vue$$1) {
    Vue$$1.mixin(NuxtSSRScreenSizeMixin);
};

// Note that here we're not only exporting the install function, but
// also the mixin itself - this is so with can `Vue.use()` or
// `mixins: [],` it.
var index = { install: install, NuxtSSRScreenSizeMixin: NuxtSSRScreenSizeMixin };

export { index as default };

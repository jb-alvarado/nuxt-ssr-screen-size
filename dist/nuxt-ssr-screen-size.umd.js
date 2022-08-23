(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.NuxtSSRScreenSize = {}, global.Vue));
})(this, (function (exports, Vue) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

    var reactiveComponent = new Vue__default["default"]({
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

    exports["default"] = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

let emptyComponent = {
    template: `
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet, quidem veniam. Excepturi provident at soluta, minus quasi similique fuga, eum eligendi autem magni qui modi pariatur esse tenetur vel!
        </div>
    `,
    data () {
        return {
        }
    }
}

import { createLocalVue, shallowMount } from '@vue/test-utils'
import NuxtSSRScreenSize from '@/index.js'

describe('nuxt-ssr-screen-size.js', () => {
    it('Sets $vssWidth and $vssHeight correctly', async () => {

        const localVue = createLocalVue()

        const wrapper = shallowMount(emptyComponent, {
            localVue,
            mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
        })

        expect(wrapper.vm.$vssWidth).toBeGreaterThan(1)
        expect(wrapper.vm.$vssHeight).toBeGreaterThan(1)
    })
})
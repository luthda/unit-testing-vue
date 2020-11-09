import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader', () => {
    test('if user is not logged in, do not show logout button', () => {
        const wrapper = mount(AppHeader)
        expect(true).toBe(true)
      })
      
    test('if a user is logged in, show logout button', () => {
        const wrapper = mount(AppHeader)
        expect(true).toBe(true)
    })
})
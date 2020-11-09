import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm) 
    // 1. Find text input
    const input = wrapper.find('[data-testid="name-input"]')

    // 2. Set value for text input
    input.setValue('David Luthiger')

    // 3. Simulate form submission
    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    console.log(wrapper.emitted('formSubmitted'))
    
    // 5. Assert payload is correct
    const expectedPayload = { name: 'David Luthiger' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})
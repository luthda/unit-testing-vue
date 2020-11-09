import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
// mock service with jest
import { getMessage } from '@/services/axios'

jest.mock('@/services/axios')
// clear mock before each service call
beforeEach(() => {
    jest.clearAllMocks()
  })

describe('MessageDisplay', () => {
  test('Calls getMessage and displays message', async () => {
     // mock the API call
     const mockMessage = 'Hello from the db!'
     getMessage.mockResolvedValueOnce({ text: mockMessage })
     const wrapper = mount(MessageDisplay)

     // wait for promise to resolve
     await flushPromises()

     // check that call happened once
     expect(getMessage).toHaveBeenCalledTimes(1)

     // check that component displays message
     const message = wrapper.find('[data-testid="message"]').element.textContent
     expect(message).toEqual(mockMessage)
  })

  test('Displays an error when getMessage call fails', async () => {
     // mock the failed API call
     const mockError = 'Oops! Something went wrong.'
     getMessage.mockRejectedValueOnce(mockError)
     const wrapper = mount(MessageDisplay)

     // wait for promise to resolve
     await flushPromises()

     // check that call happened once
     expect(getMessage).toHaveBeenCalledTimes(1)

     // check that component displays error
     const displayedError = wrapper.find('[data-testid="message-error"]').element
      .textContent
      expect(displayedError).toEqual(mockError)
  })
})
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

jest.mock('@ai-sdk/react', () => ({
  useChat: () => ({
    messages: [],
    input: '',
    handleInputChange: jest.fn(),
    handleSubmit: jest.fn(),
    isLoading: false,
  }),
}))

describe('Root app page', () => {
  it('should render a textbox', () => {
    render(<Page />)
    const form = screen.getByRole('textbox')
    expect(form).toBeInTheDocument()
  })
})

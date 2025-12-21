import { render, screen } from '@testing-library/react'
import RenderProp from '@/components/render-prop'

describe('RenderProp', () => {
  it('renders a prop', () => {
    render(<RenderProp text='asdf' />)
    const text = screen.getByText('asdf')
    expect(text).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import Page from '@/app/download/page'

describe('Download page', () => {
  it('renders Download', () => {
    render(<Page />)
    const hello = screen.getByText('Download')
    expect(hello).toBeInTheDocument()
  })
})

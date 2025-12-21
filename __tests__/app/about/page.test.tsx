import { render, screen } from '@testing-library/react'
import Page from '@/app/about/page'

describe('About page', () => {
  it('should contain a link to home', () => {
    render(<Page />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/dashboard/page'

describe('Dashboard page', () => {
  it('renders Hello', () => {
    render(<Page />)

    const hello = screen.getByText('Hello')

    expect(hello).toBeInTheDocument()
  })
})

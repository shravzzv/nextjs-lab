import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Root app page', () => {
  it('should render a heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { name: /home/i })
    expect(heading).toBeInTheDocument()
  })

  it('should contain a link to about page', () => {
    render(<Page />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })
})

// Apparently, the only difference between unit(/component) and integration tests is how much mocking is used. unit testing uses heavy mocking, whereas integration uses less, becuase it needs to test if the different units work together well, so it doesn't mock the units.
// unit vs integration is about mocking depth (a conceptual difference), not file location.
// so you can perform both unit and integration tests within the same .test.tsx file. Maybe in different blocks.
// Integration tests shine only when there’s meaningful interaction.

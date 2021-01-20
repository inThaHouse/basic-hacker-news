import { render, screen } from '@testing-library/react'
import ContentContainer from '../../components/ContentContainer'

test('renders with the right prop value', () => {
  render(<ContentContainer header='some title' />)

  const headerText = screen.getByText(/some title/i)
  expect(headerText).toBeInTheDocument()
})

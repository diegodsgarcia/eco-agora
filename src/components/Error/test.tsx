import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'

import Error from '.'

test('Should render the component', () => {
  const message = 'Ops! Ocorreu algum problema'
  const { container } = renderWithTheme(<Error message={message} />)

  expect(screen.getByText(/ops! ocorreu algum :\(/i)).toBeInTheDocument()
  expect(screen.getByText(message)).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()
})

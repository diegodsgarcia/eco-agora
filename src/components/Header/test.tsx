import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'

import Header, { HeaderProps } from '.'
import theme from 'styles/theme'

const props: HeaderProps = {
  menuItems: [
    {
      name: 'Endereço 1',
      externalCode: 'end-1',
      cameras: []
    },
    {
      name: 'Endereço 2',
      externalCode: 'end-2',
      cameras: []
    },
    {
      name: 'Endereço 3',
      externalCode: 'end-3',
      cameras: []
    }
  ],
  onMenuClick: jest.fn()
}

describe('<Header />', () => {
  it('should render header', () => {
    const { container } = renderWithTheme(<Header {...props} />)

    expect(
      screen.getByRole('heading', { name: /eco agora/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/menu button/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should toggle navigation when click in menu button', () => {
    renderWithTheme(<Header {...props} />)

    const nav = screen.getByRole('navigation', { hidden: true })
    const menu = screen.getByLabelText(/menu button/i)

    expect(nav.getAttribute('aria-hidden')).toBe('true')
    expect(nav).toHaveStyle({ opacity: 0 })

    fireEvent.click(menu)

    expect(nav.getAttribute('aria-hidden')).toBe('false')
    expect(nav).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByText(/endereço 1/i))

    expect(props.onMenuClick).toHaveBeenCalledTimes(1)
  })

  it('should render a selected menu item', () => {
    renderWithTheme(<Header {...props} itemSelected={props.menuItems[0]} />)

    expect(screen.getByText(/endereço 1/i)).toHaveStyle({
      color: theme.colors.primary
    })
  })
})

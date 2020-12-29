import { useState } from 'react'

import { Locale } from 'types/Locale'

import * as S from './styled'

export type HeaderProps = {
  menuItems: Locale[]
  itemSelected?: Locale
  onMenuClick: (locale: Locale) => void
}

const Header = ({ menuItems = [], itemSelected, onMenuClick }: HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.Logo>Eco Agora</S.Logo>
      {!!menuItems.length && (
        <S.Menu
          aria-label="Menu button"
          role="button"
          open={menuIsOpen}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen)
          }}
        >
          <S.Line />
          <S.Line />
          <S.Line />
        </S.Menu>
      )}

      <S.Nav open={menuIsOpen} aria-hidden={!menuIsOpen}>
        {menuItems.map((item, i) => (
          <S.NavItem
            key={`nav-${i}`}
            isSelected={item === itemSelected}
            onClick={() => {
              setMenuIsOpen(false)
              onMenuClick(item)
            }}
          >
            {item.name}
          </S.NavItem>
        ))}
      </S.Nav>
    </S.Wrapper>
  )
}

export default Header

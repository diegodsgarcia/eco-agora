import { useState } from 'react'

import Header from 'components/Header'
import ListCameras from 'components/ListCameras'
import Error from 'components/Error'
import { Container } from 'components/Container'

import { Locale } from 'types/Locale'

export type HomeTemplateProps = {
  locales: Locale[]
  error: boolean
}

const Home = ({ locales, error }: HomeTemplateProps) => {
  const [locale, setLocale] = useState(locales[0])

  return (
    <>
      <Header
        menuItems={locales}
        itemSelected={locale}
        onMenuClick={setLocale}
      />
      <Container>
        {error || !locale?.cameras?.length ? (
          <Error message="Parece que as cameras da Ecovias não estão no momento funcionando, tente novamente mais tarde" />
        ) : (
          <ListCameras cameras={locale.cameras} />
        )}
      </Container>
    </>
  )
}

export default Home

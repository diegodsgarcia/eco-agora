import media from 'styled-media-query'
import styled from 'styled-components'

export const Container = styled.section`
  margin: 2rem;
  max-width: 1400px;

  ${media.greaterThan('medium')`
    margin: 2rem auto;
  `}
`

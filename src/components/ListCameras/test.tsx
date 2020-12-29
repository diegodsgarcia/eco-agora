import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import { css } from 'styled-components'

import ListCameras from '.'
import * as S from './styled'
import camerasMock from './mock'

describe('<ListCameras />', () => {
  it('should render list of cameras', async () => {
    renderWithTheme(<ListCameras cameras={camerasMock} />)

    expect(screen.getAllByRole('img')).toHaveLength(6)

    expect(screen.queryAllByRole('figure')[0]).toHaveStyleRule('opacity', '1', {
      modifier: `:hover ${css`
        ${S.Description}
      `}`
    })
  })
})

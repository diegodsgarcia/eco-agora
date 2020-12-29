import { Story, Meta } from '@storybook/react/types-6-0'
import ListCameras, { ListCamerasProps } from '.'

import mock from './mock'

export default {
  title: 'ListCameras',
  component: ListCameras,
  args: {
    cameras: mock
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ListCamerasProps> = (args) => (
  <div style={{ maxWidth: 1000, margin: '0 auto' }}>
    <ListCameras {...args} />
  </div>
)

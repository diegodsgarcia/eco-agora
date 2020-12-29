import { Story, Meta } from '@storybook/react/types-6-0'

import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  args: {
    menuItems: [
      {
        name: 'Endereço 1',
        url: '#'
      },
      {
        name: 'Endereço 2',
        url: '#'
      },
      {
        name: 'Endereço 3',
        url: '#'
      }
    ]
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />

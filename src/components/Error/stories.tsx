import { Story, Meta } from '@storybook/react/types-6-0'

import Error, { ErrorProps } from '.'

export default {
  title: 'Error',
  component: Error,
  args: {
    message: 'Ops! Parece que ocorreu algum problema'
  }
} as Meta

export const Default: Story<ErrorProps> = (args) => <Error {...args} />

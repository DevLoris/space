import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import defaultExport from '../../../.storybook/config/defaultExport'

import DetailsTemplate, { DetailsTemplateProps } from './index'
import { homeArgs } from './mocks'

export default defaultExport({
  title: 'Templates/Details',
  component: DetailsTemplate,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
})

const Template: Story<DetailsTemplateProps> = (args) => <DetailsTemplate {...args} />

export const Default = Template.bind({})
Default.args = homeArgs

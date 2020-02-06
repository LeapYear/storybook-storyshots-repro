import { addDecorator } from '@storybook/react'
import React from 'react'

import { BaseTheme } from '../src/components/BaseTheme'

addDecorator((storyFn: Function) => (
  <BaseTheme>
    {storyFn()}
  </BaseTheme>
))

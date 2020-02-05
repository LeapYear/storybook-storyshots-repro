import { addDecorator } from '@storybook/react'
import React from 'react'

import { BaseTheme } from '../src/components/BaseTheme'
import styled from '../src/styled'

const StoryLayout = styled.div`
  padding: 5rem;
  background: white;
`
addDecorator((storyFn: Function) => (
  <BaseTheme>
    <StoryLayout>{storyFn()}</StoryLayout>
  </BaseTheme>
))

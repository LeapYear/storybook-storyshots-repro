import React, { SFC } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../themes'

export const BaseTheme: SFC<{ children?: React.ReactElement }> = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

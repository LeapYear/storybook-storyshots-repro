import React, { SFC } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { color } from '../styled'
import { theme } from '../themes'

const GlobalStyle = createGlobalStyle`${styledNormalize}

    html, body {
      font-family: -apple-system,
      BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 150%;
      color: ${color('text')};
      fill: currentColor;
			height: 100%;
      background-color: ${color('background')};
      -webkit-font-smoothing: antialiased;
    }

		#app {
			height: 100%;
		}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      margin: 0px;
      display: inline-flex;
      align-items: center;
      margin-bottom: 0px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.9rem;
    }

    h6 {
      font-size: 0.8rem;
    }

    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: inherit;
      }
    }

    ul {
      margin: 0;
    }

    div {
      box-sizing: border-box;
    }

		#app {
			height: 100%;
		}

    form {
      margin: 0;
    }
  `

export const BaseTheme: SFC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {children} <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

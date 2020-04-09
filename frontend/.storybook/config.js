import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import { theme } from 'assets/theme/index.ts'

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
      rel="stylesheet"
    ></link>
    {story()}
  </ThemeProvider>
))

configure(require.context('../', true, /\.stories\.tsx$/), module)

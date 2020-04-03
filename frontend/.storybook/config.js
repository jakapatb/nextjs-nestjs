import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import { theme } from '../assets/theme/index.ts'

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(require.context('../', true, /\.stories\.tsx$/), module)

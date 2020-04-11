import React from 'react'
import { action } from '@storybook/addon-actions'
import { SplashScreen } from 'components/Splash'
import { Diagonal } from 'components/Diagonal'

export default {
  title: 'Splash',
  component: SplashScreen
}

export const Splash = () => <SplashScreen />
export const DiagonalDiv = () => <Diagonal>WHAT</Diagonal>

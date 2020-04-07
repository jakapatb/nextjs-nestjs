import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from 'components/Button'

export default {
  title: 'Button',
  component: Button
}

export const Text = () => (
  <Button onClick={action('clicked')} bg="blue" width={['5rem', '10rem', '25rem', '80rem']} fontSize={[3, 4, 5]}>
    Hello Button
  </Button>
)

import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from 'components/Button'

export default {
  title: 'Button',
  component: Button
}

export const Outline = () => (
  <div style={{ display: 'inline-grid', gridGap: '1rem', backgroundColor: 'black' }}>
    <Button onClick={action('clicked')}>Button</Button>
    <Button onClick={action('clicked')} disabled>
      Disabled
    </Button>
  </div>
)

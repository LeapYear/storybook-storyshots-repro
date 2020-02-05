import React from 'react'

import { Toggle } from '../src/components/Toggle'

export default {
  title: 'Toggle',
}

export const basic = () => (
  <>
    <div>Normal Toggle</div>
    <Toggle value={true} onClick={() => {}} />
  </>
)

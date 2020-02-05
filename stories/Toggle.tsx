import React, { useState } from 'react'

import { Toggle } from '../src/components/Toggle'

export default {
  title: 'Toggle',
}

// https://github.com/storybookjs/storybook/issues/8177
const storyshotsHack = (StoryFn: React.FC) => () => <StoryFn />

export const basic = storyshotsHack(() => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <>
      <div>Normal Toggle</div>
      <Toggle value={isToggled} onClick={() => setIsToggled(!isToggled)} />
    </>
  )
})

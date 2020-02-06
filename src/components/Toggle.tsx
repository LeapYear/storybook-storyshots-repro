import React, { FunctionComponent } from 'react'

import styled, { color } from '../styled'

type Props = {
  value?: boolean
}

const Box = styled.div`
  border: 1px;
`

export const Toggle: FunctionComponent<Props> = ({
  value,
}) => (
  <ToggleContainer>
    <StyledToggle value={value || false} />
  </ToggleContainer>
)

// Styles
const ToggleContainer = styled(Box)<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid ${color('black')};
  background: ${color('white')};
  :hover {
    cursor: pointer;
  }
`

const StyledToggle = styled('div')<{ value: boolean; disabled?: boolean }>`
  border-radius: 50%;
  height: 14px;
  width: 14px;
  transition: transform 0.35s ease-in-out;
  background: ${color('black')};
  transform: translateX(4px);
`

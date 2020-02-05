import React, { FunctionComponent } from 'react'

import styled, { color, css } from '../styled'

type Props = {
  disabled?: boolean
  value?: boolean
  onClick?: Function
}

const Box = styled.div`
  border: 1px;
`

export const Toggle: FunctionComponent<Props> = ({
  disabled,
  value,
  onClick,
  ...passThroughProps
}) => (
  <ToggleContainer
    disabled={disabled}
    onClick={() => (onClick ? onClick() : null)}
    {...passThroughProps}>
    <StyledToggle disabled={disabled} value={value || false} />
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
  ${(p) =>
      p.disabled
        ? css`
            background: ${color('gray')};
            opacity: 0.6;
          `
        : css`
            background: ${color('white')};
          `}
    :hover {
    cursor: pointer;
  }
`

const StyledToggle = styled('div')<{ value: boolean; disabled?: boolean }>`
  border-radius: 50%;
  height: 14px;
  width: 14px;
  transition: transform 0.35s ease-in-out;
  ${(p) => {
    if (p.disabled) {
      return css`
        background: ${color('gray')};
        transform: translateX(4px);
      `
    } else {
      return p.value
        ? css`
            background: ${color('black')};
            transform: translateX(40px);
          `
        : css`
            background: ${color('gray')};
            transform: translateX(4px);
          `
    }
  }}
`

import * as React from 'react'
import {} from 'react-native'
import { PRIMARY_COLOR } from '@reptir/constants'
import Styled from 'styled-components/native'

export const ButtonContainer = Styled.TouchableHighlight`
  background-color: ${PRIMARY_COLOR};
  border-radius: 3px;
`

export const ButtonLabel = Styled.Text`
  color: white;
  padding: 10px;
  font-weight: bold;
  text-align: center;
`

export const Button = (
  props: {
    children: any,
    onPress: any,
    style?: object
  }) => {
  const { children, ...restProps } = props
  return (
    <ButtonContainer {...restProps} >
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonContainer>
  )
}

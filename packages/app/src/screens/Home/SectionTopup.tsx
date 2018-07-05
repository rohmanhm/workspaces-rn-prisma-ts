import * as React from 'react'
import Styled from 'styled-components/native'
import { View } from 'react-native'

import { Button } from '../../components/Button'

const TopupContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 20px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #DDD;
  margin-bottom: 20px;
`

const TopupWrapper = Styled.View`
  flex: 1;
  /* justify-content: ; */
`

const LabelBalance = Styled.Text`
  font-size: 16;
  font-weight: 700;
  color: #aaa;
`

const Balance = Styled.Text`
  font-size: 20;
  font-weight: 600;
  color: green;
`

export default () => (
  <TopupContainer>
    <TopupWrapper>
      <LabelBalance>
        SALDO
      </LabelBalance>
      <Balance>
        Rp10.000
      </Balance>
    </TopupWrapper>
    <TopupWrapper>
      <Button
        onPress={() => console.log('topup page')}>
        TOPUP
      </Button>
    </TopupWrapper>
  </TopupContainer>
)

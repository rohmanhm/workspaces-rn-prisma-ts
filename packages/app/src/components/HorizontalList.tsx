import * as React from 'react'
import Styled from 'styled-components/native'

import { Text } from './'

const BOX_SIZE = 120

export const HorizontalListContainer = Styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``

const HorizontalWrapper = Styled.View`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  border-width: 0.5;
  border-radius: 2px;
  border-color: #EEE;
  margin-left: 10px;
`

const HorizontalListImageContainer = Styled.View`
  flex: 5;
  height: ${BOX_SIZE}px;
`

const HorizontalListImage = Styled.Image`
  flex: 1;
  resize-mode: cover;
  height: ${BOX_SIZE}px;
`

const HorizontalListTextContainer = Styled.View`
  flex: 1;
  padding: 10px;
  justify-content: space-evenly;
`

type Props = {
  source: any
  title: string
}

export class HorizontalList extends React.Component<Props> {
  render () {
    return (
      <HorizontalWrapper>
        <HorizontalListImageContainer>
          <HorizontalListImage source={this.props.source} />
        </HorizontalListImageContainer>
        <HorizontalListTextContainer>
          <Text style={{ fontSize: 14 }}>{this.props.title}</Text>
        </HorizontalListTextContainer>
      </HorizontalWrapper>
    )
  }
}

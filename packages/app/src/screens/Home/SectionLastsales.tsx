import * as React from 'react'
import { View } from 'react-native'

import { Section, SectionTitle } from '../../components'
import { HorizontalListContainer, HorizontalList } from '../../components/HorizontalList'

export default () => (
  <Section>
    <SectionTitle>
      LAST SALES
    </SectionTitle>
    <View>
      <HorizontalListContainer>
        <HorizontalList
          source={{uri: 'https://unduhsoft.net/wp-content/uploads/2018/01/GARENA-LOGO-VECTOR.jpg'}}
          title={`Garena`}
        />
        <HorizontalList
          source={{uri: 'https://pmcvariety.files.wordpress.com/2018/04/steam.jpg?w=760&h=428&crop=1'}}
          title={`Steam`}
        />
        <HorizontalList
          source={{uri: 'https://octoba.jp/wp-content/uploads/2015/09/20150929_googleplay_newlogo.png'}}
          title={`Google Play`}
        />
      </HorizontalListContainer>
    </View>
  </Section>
)

import * as React from 'react'
import { ScrollView } from 'react-native'

import { SafeAreaView, Container } from '../../components'
import SectionRecomendation from './SectionRecomendation'
import SectionTopsales from './SectionTopsales'
import SectionLastsales from './SectionLastsales'

import {
  TopBar,
  SearchBar,
  SearchInput,
  SearchIcon
} from './style'

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Container>
          <TopBar>
            <SearchBar>
              <SearchIcon name="ios-search-outline" size={24} />
              <SearchInput
                placeholder="Cari sesuatu disini"
              />
            </SearchBar>
          </TopBar>

          <ScrollView>
            <SectionRecomendation />
            <SectionTopsales />
            <SectionLastsales />
          </ScrollView>
        </Container>
      </SafeAreaView>
    )
  }
}

export default Home

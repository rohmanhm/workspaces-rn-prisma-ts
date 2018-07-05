import * as React from 'react'
import { View } from 'react-native'
import { Header, ListItem } from 'react-native-elements'

import { Container, SafeAreaView } from '../../components'
import { PRIMARY_COLOR } from '@reptir/constants'

class CategoryScreen extends React.Component {

  render() {
    const list = [
      {
        name: 'Garena',
        avatar_url: 'https://cdn.iconscout.com/public/images/icon/free/png-512/garena-logo-3fb597f8cf427591-512x512.png',
        subtitle: 'Garena Shells, Voucher Garena'
      },
      {
        name: 'Steam',
        avatar_url: 'http://wfarm3.dataknet.com/static/resources/icons/set113/79c9d550.png',
        subtitle: 'Steam Wallet, Steam Voucher, Steam Game'
      },
    ]

    return (
      <SafeAreaView>
        <Container>
        <Header
          centerComponent={{ text: 'REPTIR', style: { color: '#fff' } }}
          outerContainerStyles={{backgroundColor: PRIMARY_COLOR, paddingTop: 20, height: 80}}
        />
          <View>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url }, rounded: false, overlayContainerStyle: {backgroundColor: 'white'} }}
                  title={l.name}
                  chevron={true}
                  subtitle={l.subtitle}
                  scaleProps={{
                    friction: 90,
                    tension: 100,
                    activeScale: 0.95,
                  }}
                  containerStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#eee'
                  }}
                />
              ))
            }
          </View>
        </Container>
      </SafeAreaView>
    )
  }
}

export default CategoryScreen

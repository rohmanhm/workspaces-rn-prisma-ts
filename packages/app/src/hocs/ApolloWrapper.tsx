import * as React from 'react'
import {
  ApolloProvider
} from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

export function getApolloClient() {
  const client = new ApolloClient({
    link: ApolloLink.from([
      new HttpLink({
        uri: 'http://192.168.3.7:4000'
      })
    ]),
    cache: new InMemoryCache()
  })

  return client
}

export default function ApolloWrapper(CMP: React.ComponentType) {
  return class HomeWrapped extends React.Component {
    private apolloClient: any

    constructor(props: any) {
      super(props)
      this.apolloClient = getApolloClient()
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <CMP />
        </ApolloProvider>
      )
    }
  }
}

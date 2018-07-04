declare module 'react-native-expo-image-cache' {
  import React from "react"
  import { Animated, ImageStyle } from "react-native"

  interface ImageProps {
    style?: ImageStyle
    preview?: string
    uri: string
  }

  interface ImageState {
    uri: string
    intensity: Animated.Value
  }

  export class Image extends React.Component<ImageProps, ImageState> {}

  type Listener = (uri: string) => void

  export class CacheManager {
    static async cache(uri: string, listener: Listener): Promise<void>
  }
}

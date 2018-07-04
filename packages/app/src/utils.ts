import { Image } from 'react-native'
import { Asset } from 'expo'

export function cacheImages(images: string[]) {
  return images.map(image => {
    // if (typeof image === 'string') {
    //   return Image.prefetch(image)
    // } else {
    //   return Asset.fromModule(image).downloadAsync()
    // }
    return cacheImage(image)
  })
}

export function cacheImage(source: object | any) {
  console.log('WOW', typeof source, 'uri' in source)
  if (typeof source === 'object' && 'uri' in source) {
    return Image.prefetch(source.uri)
  } else if (typeof source === 'string') {
    return Image.prefetch(source)    
  } else {
    return Asset.fromModule(source).downloadAsync()
  }
}

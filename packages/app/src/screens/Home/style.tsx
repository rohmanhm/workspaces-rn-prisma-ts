import Styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  PRIMARY_COLOR,
  GREY_COLOR
} from '@reptir/constants'

export const TopBar = Styled.View`
  height: 100;
  background-color: ${PRIMARY_COLOR};
  elevation: 1;
`

export const SearchBar = Styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: white;
  margin-horizontal: 20px;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  elevation: 1;
  border-radius: 2px;
  margin-top: 40px;
  align-items: center;
`

export const SearchIcon = Styled(Icon).attrs({
  color: GREY_COLOR
})`
  margin-right: 15px;
  margin-left: 5px;
`

export const SearchInput = Styled.TextInput.attrs({
  underlineColorAndroid: 'transparent'
})`
  flex: 1;
  font-weight: 400;
  font-size: 16px;
  background-color: white;
`

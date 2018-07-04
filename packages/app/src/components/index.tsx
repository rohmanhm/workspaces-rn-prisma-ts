/**
 * This is a custom components that modified to fit with our design
 * @author MH Rohman Masyhar
 */
import Styled from 'styled-components/native'

export const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`

export const Text = Styled.Text`
  color: #1d1d1d;
`

export const SafeAreaView = Styled.SafeAreaView`
  flex: 1;
`

export const Section = Styled.View`
  margin-bottom: 10px;
  flex: 1;
  background-color: white;
  padding: 10px 0 20px;
`

export const SectionTitle = Styled.Text`
  font-weight: 700;
  font-size: 14px;
  padding: 0px 20px 10px;
  color: #aaa;
`

export const SectionContent = Styled.View`
`

export const ListContainer = Styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

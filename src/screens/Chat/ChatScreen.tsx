import { StyleSheet } from 'react-native'
import React from 'react'
import MainContainer from '../../components/MainContainer'
import CustomHeader from '../../components/CustomHeader'
import { useTypedRoute } from '../../utils/routeUtils'

const ChatScreen = () => {
    const { params } = useTypedRoute<'Chat'>();
  
  return (
    <MainContainer
      header={<CustomHeader title={params.item.name} />}
    >

    </MainContainer>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})
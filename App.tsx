import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from './src/pages/Home.page'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
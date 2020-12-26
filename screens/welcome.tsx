import React, { useState } from 'react';
import { View, TextInput, StatusBar, Text, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Styles} from '../styles/welcome'
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {getCountry} from '../redux/actions.ts/action'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

type Props = {
  getCountry: Function
  navigation: {
    navigate: Function
  }
}

const Home = ({getCountry, navigation}: Props) => {
  const [country, changeCountry] = useState('')

  const clickHandler = () => {
    getCountry(country, navigation)
  }

  return (
    <SafeAreaView style={Styles.backgroundContainer}>
        <ScrollView>
        <StatusBar backgroundColor={"#D81B60"}/>
        <View style={Styles.topContainer}>
            <View style={Styles.imageCircle}>
            <FontAwesome
                        name={"globe"}
                        size={150}
                        color={"#D81B60"}
                    />
            </View>
            <Text style={Styles.greet}>Hi buddy! get starts your search,</Text>
        </View>
        <View style={Styles.bottomContainer}>
        <TextInput style={Styles.input} placeholder={"Enter country"} 
        onChangeText={val => changeCountry(val)}></TextInput>
        <TouchableOpacity onPress={() =>  {country=="" ? (ToastAndroid.show("Input field is empty", ToastAndroid.SHORT)) : clickHandler()}} style={Styles.button}>
        <Text style={Styles.buttonText}>Submit</Text>
      </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default connect(null, {getCountry})(Home);
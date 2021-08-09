import React from 'react'
import { StyleSheet, View, Text, SafeAreaView,Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`h-full`, { backgroundColor: '#E86229' }]}>
            <View>
                <Text style={tw`text-white p-11 text-3xl text-center`}>Give&Take</Text>
                <View style={styles.square}>
                
                <NavOptions/>
                </View>
               
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    square: {
      width: 360,
      height: 700,
      backgroundColor: "white",
      borderRadius: 55,
    },
  });

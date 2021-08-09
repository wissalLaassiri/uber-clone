import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import NavCards from '../Components/NavCards';

const ClientScreen = () => {
    return (
        <View style={tw`bg-white h-full`}>
            <Text style={[tw`font-bold mt-12 ml-5`, { color: '#E86229', fontSize: 25 }]} >Welcome{"\n"}Mouad Aouane!</Text>
            <Text
                style={tw`mr-12 mt-6 ml-5 text-justify text-sm`}
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. iusto assumenda hic reprehenderit?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                iusto assumenda usto assumenda hic reprehenderit?iusto assumenda hic reprehenderit?iusto assumenda hic reprehenderit</Text>
            <NavCards/>
        </View>
    )
}

export default ClientScreen
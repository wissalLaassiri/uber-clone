import React from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const ConfirmReceptionScreen = () => {
    const [text, onChangeText] = React.useState("");

    return (
        <View>
            <Text style={[tw`font-bold mt-20 text-center text-3xl`, { color: '#222328', }]} >Confirmation</Text>
            <Text style={[tw`mt-12 ml-9 mr-9 text-center text-xl`, { color: '#222328', }]} >
                Hi Mouad ! you receieve a package can you confirm the reception of your order ?
            </Text>
                <Text style={[tw`mt-12 ml-6 text-xl`, { color: '#E86229' }]} >
                    Order's code :
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <View style={{flexDirection:'row'}}>
                <Image
                    style={[tw`ml-36 -mt-20 content-end `, { width: 190, height: 400, resizeMode: 'contain' }]}
                    source={require('../assets/messenger.png')}
                />
            </View>
        </View>
    )
}

export default ConfirmReceptionScreen
const styles = StyleSheet.create({
    input: {
        height: 30,
        marginRight: 210,
        marginLeft: 25,
        borderBottomWidth: 2,
        borderBottomColor: "#222328",
        padding: 10,
    },
});

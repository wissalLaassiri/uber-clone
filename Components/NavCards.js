import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: "1",
        title: "Send a package",
        screen: "FormSendPackScreen",//page destination
        BgColor: 'white',
        color: 'black',
        borderColor: '#222328'
    },
    {
        id: "2",
        title: "Check your history",
        screen: "HistoryScreen",
        bgColor: '#E86229',
        color: 'white',
        borderColor: '#E86229'
    },
    {
        id: "3",
        title: "Keep tracking",
        screen: "TrackingScreen",
        bgColor: '#E86229',
        color: 'black',
        borderColor: '#E86229'
    },
    {
        id: "4",
        title: "Confirm reception",
        screen: "ConfirmReceptionScreen",
        bgColor:"white",
        color: "black",
        borderColor: '#222328'
    }
];
const NavCards = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}>

                    <View style={[styles.square1, {
                        backgroundColor: item.bgColor,
                        borderWidth: 2,
                        marginLeft: 28,
                        borderColor:item.borderColor,
                        margin: 30
                    }]}>
                        <Text style={[tw`mt-3 text-sm font-bold ml-4 mr-4 text-center`,{color:item.color}]}>
                            {item.title}
                        </Text>
                        <Icon
                            name="arrowright"
                            color={item.color}
                            type="antdesign"
                            style={[styles.circle1, { borderColor: item.color }]}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavCards
const styles = StyleSheet.create({
    square1: {
        width: 120,
        height: 110,
        marginTop: 30,
        borderRadius: 12,
    },
    circle1: {
        marginTop: 10,
        borderRadius: 50,
        borderWidth: 1,
        width: 30,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        marginLeft: 20
    }
});
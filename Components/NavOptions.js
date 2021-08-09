import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const data=[
    {
        id:"1",
        title:"I'm Client",
        image:require("../assets/men-1.png"),
        screen:"ClientScreen",//page destination
    },
    {
        id:"2",
        title:"I'm Delivery man",
        image:require("../assets/men-2.png"),
        screen:"DeliverScreen",
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <TouchableOpacity 
                onPress={()=>navigation.navigate(item.screen)}>
                    
                    <View >
                        <Image
                            style={[tw `ml-11`,{width:120,height:400,resizeMode:'contain'}]}
                            source={item.image}
                        />
                        <Text style={tw `ml-14`}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions


import  {View, Text} from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Page =() => {
    const {chatid} = useLocalSearchParams();
    console.log("file: [chatid].tsx:7 ~ page ~ id:" , chatid)
    return(
        <View>
            <Text>Page</Text>
        </View>
    );
};
export default Page;
import React from 'react';
import { View,Text,Button,TouchableOpacity,StyleSheet } from 'react-native';



export default function papName({navigation}){

    const goBackToPap = () => {
        navigation.push('SinxayName');
    }

    return (
        <View>
            <Text style={styles.text_style}>Pap</Text>
            <Button title="Pai Ha Buk Sinxai" onPress={()=>goBackToPap()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text_style: {
        fontSize: 40,
        color: '#000'
    },
    container: {
        flex: 1,
        backgroundColor: '#958383',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

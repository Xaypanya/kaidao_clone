import React,{useState} from 'react';
import { View,Text,Button,TouchableOpacity,StyleSheet } from 'react-native';
import { myName } from './data';

export default function SinxayName({navigation}){

    const cat = "cat mee 4 kha"
    const [color, setColor] = useState(false);

    function goTopap(){
        navigation.push('papName');
    }

    const changeColorHandler = () => {
        setColor((prevValue)=>!prevValue);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text_style}>I have {color ? "sy bua" : "sy som"} apple</Text>
            <Text style={styles.text_style}>color = {color.toString()}</Text>
                        <View style={{marginBottom: 10}}>
                        <Button title="Change Color" onPress={()=>changeColorHandler()}/>
                        </View>
            <Button title="Pa   i Ha Buk Pap" onPress={()=>goTopap()}/>
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
        backgroundColor: '#ccca68',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

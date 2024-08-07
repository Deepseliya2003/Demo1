import React from "react";
import { Button, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const Forth = () => {
    const base = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
            <TouchableOpacity onPress={() => base()}>
                <View style={{ height: 40, width: '100%', backgroundColor: 'blue', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Submit</Text>
                </View>

            </TouchableOpacity>


        </SafeAreaView>
    )
}
export default Forth;
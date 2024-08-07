import React from "react";
import { SafeAreaView, StyleSheet,Text,View } from 'react-native';
import Swiper from "react-native-swiper";

const Fifth = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
               
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


export default Fifth;
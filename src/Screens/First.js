
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View,Text,Button,SafeAreaView } from 'react-native';

const First=()=>{
    const [user,setUser]=useState('')
    const setData=async()=>{
        await AsyncStorage.setItem("mine","Ajay patel")
    }

    const getData=async()=>{
        const name=await AsyncStorage.getItem("mine");
        setUser(name)
    }

    const removedata =async()=>{
        const name=await AsyncStorage.removeItem("mine");
        setUser('')
    }
    return(
        <SafeAreaView>
            <View>
                <Text>AsyncStorage with React-Native!!!{user}</Text>
                <Button title="set data" onPress={setData}/>
                <Button title="get data" onPress={getData}/>
                <Button title="remove data" onPress={removedata}/>

            </View>

        </SafeAreaView>
    )
}

export default First;
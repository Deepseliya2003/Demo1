import React from "react";
import { SafeAreaView,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const First=()=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'pink'}}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <AntDesign name="iconfontdesktop" size={50} />
            <FontAwesome name="fonticons" size={50}/>

            </View>

        </SafeAreaView>
    )
}
export default First;

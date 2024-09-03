import React, { Component, PureComponent, useState } from "react";
import { Button, Text } from 'react-native';

class HOC extends PureComponent{
    constructor(){
        super();
        this.state={
            date:20
        }
    }
    render(){
        console.warn(this.state)
        return(
            <>
            <Text>pure component:{this.state.date}</Text>
            <Button title="Press" onPress={() => { this.setState({ date: 50}); } } />
                </>
        )
    }
}

export default HOC;



// import React, { useState,useMemo } from "react";
// import { Button, SafeAreaView, Text } from 'react-native';

// const HOC=()=>{
//     const [count,setCount]=useState(0);
//     const [item,setItem]=useState(10);


//     const updatememo=useMemo(
//         function multicount() {
//             console.log("multicount call");
//             return count*5
//         },[count])

 
//     return(
//         <SafeAreaView style={{flex:1,backgroundColor:'white'}}>

//             <Text>Count: {count}</Text>
//             <Text>Item: {item}</Text>
//             <Text>{updatememo}</Text> 

//             <Button title="Update Count" onPress={()=>setCount(count+1)}/>
//             <Button title="Update Item" onPress={()=>setItem(item*10)}/>



//         </SafeAreaView>
//     )
// }

// export default HOC;



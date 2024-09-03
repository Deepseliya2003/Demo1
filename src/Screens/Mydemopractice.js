import React from "react";
import { SafeAreaView } from 'react-native';
import request from 'superagent';


const makeApiCall = () => {
    request
      .get("https://jsonplaceholder.typicode.com/posts") // Replace with your API endpoint
      .then((response) => {
        console.log('API Response:', response.body);
      })
      .catch((err) => {
        console.error('API Request failed:', err);
      });
  };
  
  // Call the function
  makeApiCall();

const Mydemopractice=()=>{
    return(
        <SafeAreaView style={{backgroundColor:'gray',flex:1}}>

        </SafeAreaView>
    )
}


export default Mydemopractice;
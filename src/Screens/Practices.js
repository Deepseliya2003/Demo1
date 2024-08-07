
//post API with input field


// import React, { useEffect, useState } from "react";
// import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';

// const Practices = () => {
//     const [name,setName] = useState();
//     const [mobileno,setMobileNo] = useState();
//     const [email,setEmail] = useState();

    
//     const savedata = async () => {
//         const url = "http://192.168.1.165:3000/student"
//         let result=await fetch(url,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({name,mobileno,email})
//         });
//         result=await result.json();
//         if (result) {
//             console.warn('Data Added')
//         }
//     }

//     // useEffect(() => {
//     //     getAPIcall();
//     // },[])

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: 'white',justifyContent:'center',gap:10}}>
//             <TextInput
//             placeholder="Enter name"
//             value={name}
//             onChangeText={(text)=>setName(text)}
//             style={{borderWidth:1,borderColor:'black',width:'90%',alignSelf:'center'}}
//             />
//              <TextInput
//             placeholder="Enter Mobile Number"
//             value={mobileno}
//             onChangeText={(text)=>setMobileNo(text)}
//             style={{borderWidth:1,borderColor:'black',width:'90%',alignSelf:'center'}}
//             />
//              <TextInput
//             placeholder="Enter Email"
//             value={email}
//             onChangeText={(text)=>setEmail(text)}
//             style={{borderWidth:1,borderColor:'black',width:'90%',alignSelf:'center'}}
//             />

//             <Button title="Submit" onPress={()=>savedata()}/>
           
//         </SafeAreaView>
//     )
// }

// export default Practices;





//delete API method



// import React, { useEffect, useState } from "react";
// import { Button, SafeAreaView, Text, View } from 'react-native';

// const Practices = () => {
//     const [data,setData] = useState([]);
    
    
//     const getAPIdata = async () => {
//         const url = "http://192.168.1.165:3000/student"
//         let result=await fetch(url);
//         result=await result.json();
//         if (result) {
//             setData(result)
//         }
//     }


//     const deletuser=async(id)=>{
//         const url="http://192.168.1.165:3000/student";
//         let result=await fetch (`${url}/${id}`,{
//             method:"delete"
//         });
//         result =await result.json();
//         if (result) {
//             console.warn('user deleted');
//         }

//     }

//     useEffect(() => {
//         getAPIdata();
//     },[])

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: 'white',justifyContent:'center',gap:10}}>
//            {
//             data.length ? data.map((item)=>
//             <View>
//                 <Text>{item.name}</Text>

//                 <Button title="delete" onPress={()=>deletuser(item.id)}/>


//             </View>
//             ):null
//            }
           
//         </SafeAreaView>
//     )
// }

// export default Practices;




//$$$$$$$$$$$$$$$file upload



// import React from "react";
// import { Button, SafeAreaView,View,Text,StyleSheet,Dimensions } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// const Practices=()=>{

//     const selectDoc=async ()=>{
//         try{
//             const doc=await DocumentPicker.pick({
//                 type:[DocumentPicker.types.pdf],
//                 allowMultiSelection:true
//             });
//             console.log(doc)
//         } catch(err){
//             if (DocumentPicker.isCancel(err)) 
//                 console.log("user cancel the upload",err);
//                 else
//                 console.log(err)
            
//         }
//     }
//     return(
//         <SafeAreaView style={styles.container}>
//            <View>
//                 <Text style={styles.header}>Document Picker</Text>
//                 <View style={styles.buttonContainer}>
//                     <Button title="Select Document" onPress={selectDoc} />
//                 </View>
//             </View>
           
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     header: {
//         marginVertical: 40,
//         textAlign: 'center',
//     },
    
// });

// export default Practices;



import React, { useState } from "react";
import { Button, SafeAreaView, View, Text, StyleSheet, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import PDFView from 'react-native-pdf';
import RNFS from 'react-native-fs';

const Practices = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: false,
      });
      
      const fileUri = doc[0]?.uri;
      console.log("Selected PDF URI:", fileUri);

      if (Platform.OS === 'android' && fileUri.startsWith('content://')) {
        // Read file content into a local path
        const destPath = `${RNFS.DocumentDirectoryPath}/${doc[0].name}`;
        await RNFS.copyFile(fileUri, destPath);
        setPdfUri(`file://${destPath}`);
      } else {
        setPdfUri(fileUri.startsWith('file://') ? fileUri : `file://${fileUri}`);
      }

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User canceled the upload", err);
      } else {
        console.error("Document picker error:", err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Document Picker</Text>
        <View style={styles.buttonContainer}>
          <Button title="Select Document" onPress={selectDoc} />
        </View>
        {pdfUri && (
          <View style={styles.pdfContainer}>
            <PDFView
              source={{ uri: pdfUri, cache: true }}
              style={styles.pdf}
              onError={(error) => console.log('Error loading PDF:', error)}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    margin: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Practices;

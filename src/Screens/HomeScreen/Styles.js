import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    heading:{padding:20,fontSize:20,fontWeight:'bold'},
    wrapperview:{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20,gap:10},
    text:{fontWeight: 'bold'},
    textinput:{height: 40, borderWidth: 1, borderRadius: 5, paddingLeft: 15},
    dateicon:{position: 'absolute', right: 10, top: 30 },
    datapickerwrapperview:{ flex: 1, justifyContent: 'center', alignItems: 'center'},
    datapickerview:{backgroundColor: 'white', padding: 20, borderRadius: 10},
    genderview1:{flexDirection:'row',flex:1,justifyContent:'space-around'},
    genderview2:{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,flex:1},
    genderview3:{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10},

    touchableview:{height:30,width:30,borderRadius:15,borderWidth:1},
    dropdown: {height: 45,borderRadius: 10,padding: 12,borderWidth:1,marginHorizontal:20},
    icon: { marginRight: 5,},
    item: { padding: 17, flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',},
    textItem: {flex: 1,fontSize: 16,},
    placeholderStyle: {fontSize: 16,},
    selectedTextStyle: {fontSize: 16,},
    iconStyle: {width: 20,height: 20,},
    inputSearchStyle: {height: 40,fontSize: 16,},
    btnview:{width:'50%',justifyContent:'center',alignSelf:'center',marginTop:50,borderWidth:1,borderRadius:10,backgroundColor:'blue'},
    btntext:{padding:10,textAlign:'center',fontSize:18}
    
})
import React, { useEffect, useState } from "react";
import {View,Text,FlatList,TouchableOpacity,TextInput,StyleSheet,Image,ActivityIndicator, BackHandler} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import   Icon from "react-native-vector-icons/MaterialIcons"
import   Icon1 from "react-native-vector-icons/Feather"

// My Components 
import FetchAxios from "../CustomHooks/FetchAxios";
import Colors from  "../constants/Colors";
const Home =()=>{
        
    const {isLoading,data} =FetchAxios()
    const [search, setSearch] = useState("");
    const [rtl, setRtl] = useState(false);
    const [isDark,setIsDark] =useState(true)
   
    if(isLoading){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:Colors.orange,fontSize:20,fontWeight:'500'}}> Fetching data ... 
                    <ActivityIndicator size="large" color={Colors.dark} />
                </Text>
            </View>
        )
    }
    const filteredBooks = data.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

    return(

            <KeyboardAwareScrollView keyboardShouldPersistTaps='never' style={{flex:1,marginTop:40,backgroundColor:isDark ? Colors.dark : Colors.white}}>

                <View style={{flex:0.2,height:70,flexDirection:"row",alignItems:'center',justifyContent:'flex-start',}}>
                    
                    <Text style={{flex:0.7,marginLeft:25,alignSelf:'center',fontSize:23,fontWeight:'500',color: isDark ? Colors.white : Colors.dark}}  > Read with Booklers</Text>
                    <View style={{flex:0.3,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                        <TouchableOpacity style={{}} onPress={() => setIsDark(!isDark)}>
                                { isDark ? <Icon1 name="sun" size={30} color={Colors.white} /> : <Icon name="dark-mode" size={30} color={Colors.dark} />    }
                                 {/* <Icon1 name="sun" size={30} color={Colors.white} />  */}
                           
                            
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{flex:0.1,flexDirection:'row',marginVertical:20,alignItems:'center',justifyContent:'center'}}>
                
                    <TextInput placeholder="Enter book title to search" placeholderTextColor={isDark ? Colors.white : Colors.dark} style={[{color: isDark? Colors.white : Colors.dark, },styles.searchBar]}
                    value={search}
                    onChangeText={setSearch}></TextInput>

                    <TouchableOpacity style={[styles.langButton,{backgroundColor: isDark ? Colors.white : Colors.orange}]} onPress={() => setRtl(!rtl)}> 
                        <Text style={{color: isDark ? Colors.dark : Colors.white,fontWeight:'500',fontSize:14}} > {rtl ? "To English" : "To Urdu"}</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flex:0.7,marginTop:30}}>
                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (

                    <TouchableOpacity >

                    <View  style={[styles.flatlistContainer,{ textAlign: rtl ? "right" : "left" }]}>
                        
                        <View style={{alignItems:'center',borderRadius:20}}>

                        <Image
                            style={styles.bookImage}
                            source = {require('../assets/book.jpg')}
                            
                            />
                        </View>

                        <View style={{padding:12}}>

                            <Text style={[styles.item, { textAlign: rtl ? "right" : "left" }]}>
                            Title : {item.title }
                            </Text>
                            <Text style={[styles.item, { textAlign: rtl ? "right" : "left" }]}>
                            Author : {item.author.name}
                            </Text>
                            <Text style={[styles.item, { textAlign: rtl ? "right" : "left" }]}>
                            Published : {item.isPublished  ? 'yes' : 'No'}
                            </Text>
                        </View>
                        
                    </View>
                    </TouchableOpacity>
                    

                )}
            />
                </View>
            </KeyboardAwareScrollView>

        // </View>
    )
}

const styles = StyleSheet.create({

    searchBar :{
        
        borderWidth:2,
        borderColor:'orange',
        height:40,
        paddingVertical:10,
        paddingLeft:20,
        width:'70%',
        marginLeft:10,
        borderRadius:30
    },
    langButton:{
        
        width:'20%',
        height:40,
        borderRadius:20,
        marginLeft:5,
        // flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    flatlistContainer:{
        borderBottomWidth: 0.5,
        borderBottomColor: "white",
        flex:1,
        flexDirection:'column',
        backgroundColor:'orange',
        marginHorizontal:20,
        marginBottom:15,
        // padding:12,
        borderRadius:20,
        // alignItems:'center'
        
    },
    item: {
        // padding: 20,
        color:'white',
        fontSize:17,
        fontWeight:'500',

        marginBottom:10
        // backgroundColor:'grey'
      },
      bookImage:{
        // height:200,
        // width:"90%",
        // borderRadius:10,
        // marginVertical:10,
        height:200,
        width:"100%",
        marginBottom:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20

        // resizeMode:'contain',
      }
})


    export default Home;
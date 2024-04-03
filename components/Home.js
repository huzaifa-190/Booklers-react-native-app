import React, { useEffect, useState } from "react";
import {View,Text,FlatList,TouchableOpacity,TextInput,StyleSheet,Image,ActivityIndicator} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FetchAxios from "../CustomHooks/FetchAxios";

// const translate = require('google-translate-api');
    const flag=0
    
const Home =()=>{
        
    const {isLoading,data} =FetchAxios()
    const [search, setSearch] = useState("");
    const [rtl, setRtl] = useState(false);
   
    if(isLoading){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'orange',fontSize:20,fontWeight:'500'}}> Fetching data ... </Text>
                <ActivityIndicator size="large" color="orange" />
            </View>
        )
    }
    const filteredBooks = data.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

    return(

            <KeyboardAwareScrollView keyboardShouldPersistTaps='never' style={{flex:1,marginTop:40,}}>

                <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}>
                    
                    <Text style={{alignSelf:'center',fontSize:23,fontWeight:'500',color:'orange'}}  > Read with Booklers</Text>

                </View>
                <View style={{flex:0.1,flexDirection:'row',marginVertical:20,alignItems:'center',justifyContent:'center'}}>
                
                    <TextInput placeholder="Enter book title to search" placeholderTextColor='orange' style={styles.searchBar}
                    value={search}
                    onChangeText={setSearch}></TextInput>

                    <TouchableOpacity style={styles.langButton} onPress={() => setRtl(!rtl)}> 
                        <Text style={{color:'white'}} > {rtl ? "To English" : "To Urdu"}</Text>
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
        backgroundColor:'orange',
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
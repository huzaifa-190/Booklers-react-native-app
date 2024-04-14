import React from "react";
import { View,Text } from "react-native";
// import Pdf from 'react-native-pdf';


export default Book =({navigation,route})=>{

    const item = route.params.item
    console.log("\n\n\t\titemememm in bookd ==> ",item)

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}> {item.title} </Text>
            {/* <Pdf
                source={{uri:'http://example.com/sample.pdf',cache:true}}
                onLoadComplete={(numberOfPages,filePath)=>{
                console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages)=>{
                console.log(`current page: ${page}`);
                }}
                onError={(error)=>{
                console.log(error);
                }}
                style={styles.pdf}/> */}
        </View>
    )
}


// export default Book;
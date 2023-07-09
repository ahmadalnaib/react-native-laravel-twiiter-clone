import { navigation } from "@react-navigation/native";
import React from "react";
import {View,Text, Button, FlatList,StyleSheet,Image, Platform} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({navigation})
{
  const data=[
    {
      id:'1',
      title:'one'
    },
    {
      id:'2',
      title:'Two'
    }
  ]

  const goToProfile=()=>{
    navigation.navigate('Profile Screen')
  }

  const goToSingleTweet=()=>{
    navigation.navigate('Tweet Screen')
  }


  function goToNewTweet(){
    navigation.navigate('New Tweet')
  }
  const renderItem=({item})=>(
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={()=>goToProfile()}>
      <Image style={styles.avatar} source={{uri:'https://source.unsplash.com/featured/300x203'}}/>

      </TouchableOpacity>
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.flexRow} onPress={()=>goToSingleTweet()}>
        <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.tweetHandle}>@ahmad</Text>
        <Text >&middot;</Text>
        <Text numberOfLines={1} style={styles.tweetHandle}>9m</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tweetContentContainer} onPress={()=>goToSingleTweet()}>
          <Text style={styles.tweetContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur mollitia eligendi repudiandae quasi, numquam eos architecto sequi eum aliquid, iusto cum culpa, explicabo temporibus! Nam reprehenderit sapiente facere obcaecati quibusdam!</Text>
        </TouchableOpacity>
        <View style={styles.tweetEngagement}>
         <TouchableOpacity style={styles.flexRow}>
         <EvilIcons name="comment" size={24} color="gray"  style={{marginRight:2}}/>
          <Text style={styles.textGray}>444</Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.flexRow,styles.ml4]}>
         <EvilIcons name="retweet" size={24} color="gray"  style={{marginRight:2}}/>
          <Text style={styles.textGray}>777</Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.flexRow,styles.ml4]}>
         <EvilIcons name="heart" size={24} color="gray"  style={{marginRight:2}}/>
          <Text style={styles.textGray}>15</Text>
         </TouchableOpacity>
       
         <TouchableOpacity style={[styles.flexRow,styles.ml4]}>
         <EvilIcons name={Platform.OS === 'ios' ?'share-apple':'share-google'} size={24} color="gray"  style={{marginRight:2}}/>
         
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
  return(
    <View style={styles.container}>
    <FlatList data={data} 
    renderItem={renderItem} 
    keyExtractor={item=>item.id} 
    ItemSeparatorComponent={() => (<View style={styles.tweetSeparator}></View>
    )}/>
      <TouchableOpacity 
      style={styles.floatingButton} 
      onPress={() => goToNewTweet()}
      >
         <AntDesign name="plus" size={26} color="white"/>
      </TouchableOpacity>
    </View>
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  tweetContainer:{
   flexDirection:"row",
  paddingHorizontal:12,
  paddingVertical:12,
  },
  avatar:{
    width:42,
    height: 42,
    marginRight:8,
    borderRadius:21
  },
  flexRow:{
    flexDirection:'row',
  },
  tweetName:{
fontWeight:'bold',
color:'#222' ,
  },
  tweetHandle:{
    marginHorizontal:9,
    color:'gray',
  },
  tweetContentContainer:{
   marginTop:4,
  },
  tweetContent:{
    lineHeight:20,
  },
  tweetEngagement:{
flexDirection:"row",
alignItems:"center",
marginTop:12,
  },
  textGray:{
    color: 'gray',
  },
  ml4:{
    marginLeft:16
  },
  tweetSeparator:{
    borderBottomWidth:1,
    borderBottomColor:'#f1f1f1'
  },
  floatingButton:{
    width: 60,
    height: 60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1d9bf1',
 
    bottom: 40,
    right: -30,
    }
})
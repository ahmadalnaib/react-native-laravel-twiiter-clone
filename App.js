import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import TweetScreen from './screens/TweetScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import Notifications from './screens/NotificationsScreen';
import Search from './screens/SearchScreen';

const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:true,headerBackTitleVisible:false}}>
       <Stack.Screen name="Tab" component={TabNavigator} options={{title:""}}/>
          <Stack.Screen name="New Tweet" component={NewTweet} options={{title:""}}/>
          <Stack.Screen name="Tweet Screen" component={TweetScreen} options={{title:""}}/>
          <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{title:""}}/>
    </Stack.Navigator>
  )
}

const TabNavigator=()=>{
  return(
    <Tab.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false,}}>
       <Tab.Screen name="Home1" component={HomeScreen}
        options={{tabBarIcon:({color,size})=>(
        <Ionicons name="home" size={size} color={color}/>
       )}}/>
          <Tab.Screen name="Search" component={Search}  options={{tabBarIcon:({color,size})=>(
        <Ionicons name="search" size={size} color={color}/>
       )}}/>
          <Tab.Screen name="Notifications" component={Notifications}  options={{tabBarIcon:({color,size})=>(
        <Ionicons name="notifications" size={size} color={color}/>
       )}}/>
   
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
          <Drawer.Screen name="Home" component={HomeStackNavigator}/>
          <Drawer.Screen name="Settings" component={SettingScreen}/>
 
        </Drawer.Navigator>

    </NavigationContainer>
  );
}



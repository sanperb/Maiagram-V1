import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PrincipalStack from './src/components/Screen/PrincipalStack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Colours from '/Users/sandra/Maiagram/src/components/res/Colours.js'
import UserloginStack from './src/components/Userlogin/UserloginStack'
import UploadphotoStack from '/Users/sandra/Maiagram/src/components/Uploadphoto/UploadphotoStack'
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAF6TSpisvER2VjOZBGQsC4NBoXB2Fr9xs",
  authDomain: "maiagram-40dbb.firebaseapp.com",
  databaseURL: "https://maiagram-40dbb.firebaseio.com",
  projectId: "maiagram-40dbb",
  storageBucket: "maiagram-40dbb.appspot.com",
  messagingSenderId: "931875273828",
  appId: "1:931875273828:web:992b8b51aa5415af86f371",
  measurementId: "G-BZM9N5J7VW"
};

firebase.initializeApp(firebaseConfig);



const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
      tabBarOptions={{
        style:{
          backgroundColor: Colours.dark,
          paddingBottom:5,
          tintColor: Colours.logocolor,
        }

      }}
      >
        <Tabs.Screen
         name="Home"
         component={PrincipalStack}
         options={{
           tabBarIcon:({size, color})=>(
             <Image
             style={{tintColor: Colours.lightest, width: size, height: size}} 
             source={require ('/Users/sandra/Maiagram/src/components/assets/plus-icon.png')}/>

           )
         }}
        />
        <Tabs.Screen
         name="Upload Photo"
         component={UploadphotoStack}
         options={{
           tabBarIcon:({size, color})=>(
             <Image
             style={{tintColor: Colours.lightest, width: size, height: size}} 
             source={require ('/Users/sandra/Maiagram/src/components/assets/plus-icon.png')}/>

           )
         }}
        />
      <Tabs.Screen
         name="User"
         component={UserloginStack}
         options={{
           tabBarIcon:({size, color})=>(
             <Image
             style={{tintColor: Colours.lightest, width: size, height: size}} 
             source={require ('/Users/sandra/Maiagram/src/components/assets/plus-icon.png')}/>

           )
         }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
import React from 'react';
import {createStackNavigator, NavigationContainer} from '@react-navigation/stack'
import {StyleSheet, View, Text, Image} from 'react-native';
import Colours from 'components/res/Colours.js'
import PrincipalScreen from './PrincipalScreen';


function LogoTitle() {
  return (
    <Image
      style={{ width: 160, height: 50, marginTop: 5,alignSelf: 'center'}}
      source={require('components/assets/logov4.png')}
    />
  );
}

const Stack = createStackNavigator();

const PrincipalStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: Colours.dark,
          height: 80,
          borderTopColor: Colours.light,
          borderTopWidth: 20,
        }
      }}
      >
        <Stack.Screen
          name="Home"
          component={PrincipalScreen}
          options={{ headerTitle: props => <LogoTitle  {...props} />}}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    header: {
      height:150,
      alignContent: 'center',
    },
    
  });

export default PrincipalStack;
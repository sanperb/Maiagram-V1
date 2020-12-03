import React from 'react';
import Colours from '/Users/sandra/Maiagram/src/components/res/Colours.js'
import * as firebase from 'firebase';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Header, Input, Content, Form, Item, Button, Label} from 'native-base'


export default class UserloginScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = ({
      email:'',
      password:'',
    })
  }
  signUpUser = (email, password) => {

    try {
      if(this.state.password.length < 8){
        alert("Please enter at least 8 characters")
        return;
      }
    firebase.auth(),createUserWithEmailAndPassword(email, password)

  }
  catch(error){
    console.log(error.toString())
  }
  }
  loginUser = (email, password) => {

    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })
    }
    catch (error){
      console.log(error.toString())
    }
  }


  render (){
    return(
    <Container style={styles.container}>
     <Form>
       <Item floatingLabel>
          <Label>Email</Label>
          <Input
             autoCorrect={false}
             autoCapitalize="none"
             onChangeText={(email) => this.setState({email})}

             />
         </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
             secureTextEntry={true}
             autoCorrect={false}
             autoCapitalize="none"
             onChangeText={(password) => this.setState({password})}
          />
         </Item>
       <Button style={{marginTop:10}}
        full
        rounded
        success
        onPress={() => this.loginUser(this.state.email, this.state.password) }
        >
        <Text style={{color:Colours.white}}>Login</Text>
       </Button>
       <Button style={{marginTop:10}}
        full
        rounded
        primary
        onPress={() => this.signUpUser(this.state.email, this.state.password) }

        >
        <Text style={{color:Colours.white}}>Sign Up</Text>
       </Button>
  
       </Form>
  </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colours.ligh,
    justifyContent:'center',
    padding:10,

  }
})

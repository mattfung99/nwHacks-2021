import React from 'react';
import Firebase from 'firebase';
import config from './config';

class recycle_app extends React.Component{
    constructor(props){
        super(props);
        Firebase.initializeApp(config.firebase);

        this.state = {
            //placeholder name
            temp: []
        }
    }

    writeUserData = () => {
        Firebase.database().ref('/').set(this.state);
        console.log('DATA SAVED');
      }
      
      getUserData = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
        console.log('DATA RETRIEVED');
      }


      componentDidMount() {
        this.getUserData();
      }
      
      componentDidUpdate(prevProps, prevState) {
        // check on previous state
        // only write when it's different with the new state
        if (prevState !== this.state) {
          this.writeUserData();
        }
      }
}



import {
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react';
import CheckBox from 'react-check-box';

const ToDoItem = () => {
  return (
    <View>
      <CheckBox
        checkBoxColor="skyblue"
      />
      <Text>
        A random To-Do item
      </Text>
    </View>
  );
};

import React, {useState} from 'react';
import {db} from './src/config';
const[doneState, setDone] = useState(false);
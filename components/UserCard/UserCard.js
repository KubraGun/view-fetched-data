import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserCard = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.name}>{props.username}</Text>
      <View style={styles.inner_container}>
        <Text >{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
      
    </View>
  );
}

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff',
    marginVertical: 5, 
    padding: 10,
      },
  inner_container:{
    flexDirection: 'row',
    alignItems: 'center',
  },
    name:{
      fontWeight:'bold',

      },
    email:{
      fontSize:12,
      fontStyle: 'italic',
      color:'gray',
      marginLeft: 5,
    },
})
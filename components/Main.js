import React from 'react';
import {StyleSheet, View, Button, Text, Image} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
      position: "relative",
      paddingBottom: 80,
      paddingRight: 50,
  }
});

const Start = ({navigation, route}) => {

    return (
        <View style={styles.container}>
        </View>
    )
};
export default Start;
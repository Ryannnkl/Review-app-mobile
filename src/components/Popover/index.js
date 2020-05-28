import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Popover from 'react-native-popover-view';
import { useSelector, useDispatch } from 'react-redux';

export default function PopoverView({ text }) {

  const visible = useSelector(state => state.confirm);
  const dispatch = useDispatch();
  
  return (
      <Popover
        visible={false}
        style={styles.container}
        >
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <TouchableOpacity onPress={ ()=> dispatch({ type: 'SHOW_POP',  visible }) } style={styles.button}>
          <Text>OK</Text>
        </TouchableOpacity>
      </Popover>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    height: 80,
    backgroundColor: '#0D81C2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#F4F4F4'
  }
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969'

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 50,
    marginTop: 50,
    backgroundColor: '#34558b'
  }
});

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenida a WAG</Text>
      <Text style={styles.text}>Marixoxo</Text>
    </View>
  );
}

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Modified counter: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

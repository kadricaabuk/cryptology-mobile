import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomToolbar from './src/components/partials/BottomToolbar/BottomToolbar';

export default function App() {
  const [route, setRoute] = useState("home")
  return (
    <View style={styles.container}>
      <Text>{route}</Text>
      <BottomToolbar route={route} setRoute={setRoute} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

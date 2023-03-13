import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>I made and Italian Flag</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.flag}>
        <View style={styles.boxOne}>
        </View>
        <View style={styles.boxTwo}>
        </View>
        <View style={styles.boxThree}>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag:{
    flex:1,
    flexDirection:'row'
  },
  boxOne:{
    flex: 1,
    backgroundColor:'green',

  },
  boxTwo:{
    flex: 1,
    backgroundColor:'white',
  },
  boxThree:{
    flex: 1,
    backgroundColor:'red',
  }
});

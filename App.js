import React,{useState} from 'react';
import { Text, View, ScrollView, Button } from 'react-native';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0)

  return(
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me!
    </Text>
    <View style={{ height: 300, backgroundColor: '#e5e5e5', marginTop: 200 }}>
      {/* This is our scrollable area */}
      <ScrollView horizontal>        
        <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
      </ScrollView>
    </View>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount >=3}
      />
    </View>
  </View> 
  )
};

export default App;


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Kaizen Case Study</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;

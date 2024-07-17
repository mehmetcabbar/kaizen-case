import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Navigation from './navigation/Navigation';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

import { Provider } from 'react-redux';
import { store } from './redux/store';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Navigation from './navigation/Navigation';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="default" />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fontFamily, fontSize } from './utils/constants';
import { myColors } from './utils/constants/myColors';
import Logo from './images/logo.svg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.regular}>It's first</Text>
        <Text style={styles.bold}>Its's second</Text>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const App = () => {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regular: {
    fontFamily: fontFamily.REGULAR,
    fontSize: fontSize.SMALL,
    color: myColors.MY_RED
  },
  bold: {
    fontFamily: fontFamily.BOLD,
    fontSize: fontSize.LARGE,
    color: myColors.MY_BLACK
  }
})


export default App;

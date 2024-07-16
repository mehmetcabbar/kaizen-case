import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fontFamily } from './utils/constants';


const App = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <Text style={styles.regular}>{t("kaizen_case_study")}</Text>
        <Text style={styles.bold}>{t("kaizen_case_study_bold")}</Text>
      </View>
    </SafeAreaView>
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
    fontSize: 24
  },
  bold: {
    fontFamily: fontFamily.BOLD,
    fontSize: 24
  }
})


export default App;

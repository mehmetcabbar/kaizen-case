import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


const App = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>{t("kaizen_case_study")}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;

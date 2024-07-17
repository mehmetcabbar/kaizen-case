import { View } from 'react-native'
import { styles } from './Styles'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { IHomePageTypes } from '../../types/Types';
import MyHeader from '../../components/myHeader/MyHeader'
import Spacer from '../../components/spacer/Spacer';
import HorizontalFilter from '../../components/horizontalFilter/HorizontalFilter';
import SingleContent from '../../components/singleContent/SingleContent';


const Home = ({ navigation }: BottomTabScreenProps<IHomePageTypes, 'Home'>) => {
    return (
        <View style={styles.container}>
            <MyHeader />
            <Spacer paddingVertical={10} />
            <HorizontalFilter />
            <Spacer paddingVertical={10} />
            <SingleContent />
        </View>
    )
}

export default Home
import { View } from 'react-native'
import { styles } from './Styles'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { IHomePageTypes } from '../../types/Types';
import MyHeader from '../../components/myHeader/MyHeader'
import ButtonWithIcon from '../../components/buttonWithIcon/ButtonWithIcon';
import Spacer from '../../components/spacer/Spacer';
import HorizontalFilter from '../../components/horizontalFilter/HorizontalFilter';


const Home = ({ navigation }: BottomTabScreenProps<IHomePageTypes, 'Home'>) => {
    return (
        <View style={styles.container}>
            <MyHeader />
            <Spacer paddingVertical={10} />
            <HorizontalFilter />
        </View>
    )
}

export default Home
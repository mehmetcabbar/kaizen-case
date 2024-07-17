import { View } from 'react-native'
import { styles } from './Styles'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { IHomePageTypes } from '../../types/Types';
import MyHeader from '../../components/myHeader/MyHeader'


const Home = ({ navigation }: BottomTabScreenProps<IHomePageTypes, 'Home'>) => {
    return (
        <View style={styles.container}>
            <MyHeader />
        </View>
    )
}

export default Home
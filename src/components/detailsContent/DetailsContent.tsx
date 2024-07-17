import { Text, View } from 'react-native'
import { styles } from './Styles'
import myData from '../../data/data.json'
import { first, get } from 'lodash'
import Spacer from '../spacer/Spacer'

const DetailsContent = () => {
    const data = first(myData?.content)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{get(data, "detailsTitle")}</Text>
            <Spacer paddingVertical={7.5} />
            <Text style={styles.text}>{get(data, "description")}</Text>
        </View>
    )
}

export default DetailsContent
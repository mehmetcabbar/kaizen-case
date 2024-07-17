import { Alert, Text, TouchableOpacity, } from 'react-native'
import { styles } from './Styles'
import Brands1 from '../../images/brands/brands1.svg'
import Brands2 from '../../images/brands/brands2.svg'
import Brands3 from '../../images/brands/brands3.svg'
import Brands4 from '../../images/brands/brands4.svg'
import Brands5 from '../../images/brands/brands5.svg'

import { isEqual } from 'lodash'

type Props = {
    text: string,
    active: number,
    onPress: () => void | void,
    index: number
}

const ButtonWithIcon = ({ text, active, onPress, index }: Props) => {

    const getMyImage = () => {
        if (isEqual(index, 0)) {
            return <Brands1 />
        } else if (isEqual(index, 1)) {
            return <Brands2 />
        } else if (isEqual(index, 2)) {
            return <Brands3 />
        } else if (isEqual(index, 3)) {
            return <Brands4 />
        } else {
            return <Brands5 />
        }
    }

    return (
        <TouchableOpacity
            style={isEqual(active, index) && !isEqual(index, 0) ? styles.wrapperActive : styles.wrapper}
            onPress={onPress}
        >
            {getMyImage()}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonWithIcon
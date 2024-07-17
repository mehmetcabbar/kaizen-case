import { FlatList, View } from 'react-native'
import ButtonWithIcon from '../buttonWithIcon/ButtonWithIcon'
import { styles } from './Styles'
import localData from '../../data/data.json'
import { useDispatch, useSelector } from 'react-redux'
import { changeActive } from '../../redux/slices/activeSlice'
import { RootState } from '../../redux/store'

const HorizontalFilter = () => {
    const dispatch = useDispatch()
    const active = useSelector((state: RootState) => state.active.value)


    return (
        <View style={styles.container}>
            <FlatList
                data={localData?.filters}
                renderItem={({ item, index }) => (
                    <ButtonWithIcon
                        text={item?.name}
                        index={index}
                        onPress={() => dispatch(changeActive(index))}
                    />
                )}
                keyExtractor={(item: any) => item?.id} // I will check type error later
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default HorizontalFilter
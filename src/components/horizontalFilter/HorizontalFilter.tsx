import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import ButtonWithIcon from '../buttonWithIcon/ButtonWithIcon'
import { styles } from './Styles'
import localData from '../../data/data.json'

const HorizontalFilter = () => {
    const [active, setActive] = useState(0)

    return (
        <View style={styles.container}>
            <FlatList
                data={localData?.filters}
                renderItem={({ item, index }) => (
                    <ButtonWithIcon
                        text={item?.name}
                        active={active}
                        index={index}
                        onPress={() => setActive(index)}
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
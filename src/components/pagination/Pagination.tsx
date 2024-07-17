import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './Styles'
import { useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import myData from '../../data/data.json'
import { RootState } from '../../redux/store'

const Pagination = ({ index }: any) => {
    const data = new Array(5).fill(0)
    const mappedArray = data.map((_, index) => index + 1)
    const active = useSelector((state: RootState) => state.active.value)
    const [hex, setHex] = useState("#D8D8D8")

    useEffect(() => {
        const findHex: any = myData.content.find((item: any) => item.id === index + 1)
        setHex(findHex?.buttonHex)
    }, [index])

    return (
        <View style={styles.container}>
            {hex ?
                mappedArray.map((key) => (
                    <View key={key} style={[
                        isEqual(active, key - 1) ? styles.dotActive : styles.dot,
                        { backgroundColor: isEqual(index, key - 1) ? hex : "#D8D8D8" }
                    ]} />
                ))
                : null
            }
        </View>
    )
}

export default Pagination
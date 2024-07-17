import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-svg'

type Props = {}

const Details = (props: Props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderColor: "white" }}>
            <Text>Details Screen!</Text>
        </View>
    )
}

export default Details
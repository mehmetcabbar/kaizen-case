import React from 'react'
import { Text, View } from 'react-native'

type Props = {}

const Portal = (props: Props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text>Portal Screen!</Text>
        </View>
    )
}

export default Portal
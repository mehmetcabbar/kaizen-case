import React from 'react'
import { View, Text } from 'react-native'

type Props = {}

const Wallet = (props: Props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text>Wallet Screen!</Text>
        </View>
    )
}

export default Wallet
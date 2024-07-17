import React from 'react'
import { Text, View } from 'react-native'

type Props = {}

const Home = (props: Props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            <Text>Home Screen!</Text>
        </View>
    )
}

export default Home
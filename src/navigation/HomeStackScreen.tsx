import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';

type Props = {}

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = (props: Props) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeStack"
                component={Home}
                options={({ navigation, route }): any => ({
                    headerShown: false
                })}
            />
            <HomeStack.Screen name="Details" component={Details} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeStack"
                component={Home as any}
                options={({ navigation, route }): any => ({
                    headerShown: false
                })}
            />
            <HomeStack.Screen
                name="Details"
                component={Details}
                options={({ navigation, route }): any => ({
                    headerShown: false,
                    presentation: 'fullScreenModal'

                })}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
import { Platform, View } from 'react-native';
import { fontFamily, fontSize } from '../utils/constants';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { myColors } from '../utils/constants/myColors';
import { useTranslation } from 'react-i18next';
import { TabParamList } from '../types/Types';
import { styles } from './Styles';

// Our pages are here
import Portal from '../pages/Portal/Portal';
import Wallet from '../pages/Wallet/Wallet';
import HomeStackScreen from './HomeStackScreen';

// Our icons are here
import WalletIcon from '../images/navbarIcon/wallet.svg';
import PortalIcon from '../images/navbarIcon/portal.svg';
import ExploreIcon from '../images/navbarIcon/explore.svg';
import { useEffect, useState } from 'react';
import SplashScreen from '../pages/SplashScreen/SplashScreen';



const Tab = createBottomTabNavigator<TabParamList>();

const Navigation = () => {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        setLoading(false)
    }, [loading])

    if (loading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }): BottomTabNavigationOptions => ({
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderTopColor: myColors.MY_NAV_BORDER,
                        borderTopWidth: 1.5,
                        backgroundColor: myColors.MY_WHITE,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingBottom: Platform.OS === "android" ? 8 : 0,
                        height: Platform.OS === "ios" ? 60 : 68,
                        ...styles.shadow
                    },
                    tabBarLabelStyle: {
                        fontFamily: fontFamily.BOLD,
                        fontSize: fontSize.XSMALL
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string | JSX.Element = "";

                        if (route.name === 'Home') {
                            return iconName = focused ?
                                <ExploreIcon fill={color} />
                                : <ExploreIcon fill={color} />;
                        }
                        else if (route.name === 'Portal') {
                            return <View style={styles.iconWrapper}><PortalIcon /></View>;
                        }
                        else if (route.name === 'Wallet') {
                            return iconName = focused ?
                                <WalletIcon fill={color} />
                                : <WalletIcon fill={color} />;
                        } else {
                            return <ExploreIcon />
                        }
                    },
                    tabBarActiveTintColor: myColors.MY_BLACK,
                    tabBarInactiveTintColor: myColors.MY_GRAY,
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={({ navigation, route }: BottomTabScreenProps<TabParamList, 'Home'>): BottomTabNavigationOptions => ({
                        title: "Keşfet",
                        headerShown: false
                    })}
                />
                <Tab.Screen
                    name="Portal"
                    component={Portal}
                    options={({ navigation, route }: BottomTabScreenProps<TabParamList, 'Portal'>): BottomTabNavigationOptions => ({
                        title: "",
                        headerShown: false,
                    })}
                />
                <Tab.Screen
                    name="Wallet"
                    component={Wallet}
                    options={({ navigation, route }: BottomTabScreenProps<TabParamList, 'Wallet'>): BottomTabNavigationOptions => ({
                        title: t("daha_wallet"),
                        headerShown: false,
                    })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
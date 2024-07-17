import { Platform, View } from 'react-native';
import { fontFamily, fontSize } from '../utils/constants';
import { styles } from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { myColors } from '../utils/constants/myColors';
import { TabParamList } from '../types/Types';

// Our pages are here
import HomeStackScreen from './HomeStackScreen';
import Wallet from '../pages/Wallet/Wallet';

// Our icons are here
import ExploreIcon from '../images/navbarIcon/explore.svg';
import WalletIcon from '../images/navbarIcon/wallet.svg';
import PortalIcon from '../images/navbarIcon/portal.svg';
import Portal from '../pages/Portal/Portal';



const Tab = createBottomTabNavigator<TabParamList>();

const Navigation = () => {
    const { t } = useTranslation()
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }): BottomTabNavigationOptions => ({
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
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
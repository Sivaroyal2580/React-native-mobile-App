/**
 * Cerdoc Health Doctor: React Native App
 * 
 * Objective: The file declares and calls 
 *          - APIs for home screen where we have 
 *            - appointments, recommended doctors, clinics
*/

//imported modules
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    PixelRatio,
    Platform
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

//imported files
import HomeScreen from './HomeScreen/homeScreen';
import AppointmentsScreen from './appointmentScreen';
import { PatientAllDoctorsMessages } from './message/messages';
import { Profile } from './profile';
import { PaymentScreen } from './paymentScreen';
import { ReportScreen } from './report/reportsScreen';
import PatientListForReport from './report/patientList';
import { moderateScale } from '../components/sizer/sizer';
import walkinRegistration from './WalkinRegistration/Walkinreg';


//instantiating the navigator
const Tab = createBottomTabNavigator();

//globals
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let HomeIcon = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Home.png") : { uri: `asset:/images/icons/footer/Home.png` };
let HomeIconSelected = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Home1.png") : { uri: `asset:/images/icons/footer/Home1.png` };

let AppointmentIcon = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Appointment.png") : { uri: `asset:/images/icons/footer/Appointment.png` };
let AppointmentIconSelected = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Appointment1.png") : { uri: `asset:/images/icons/footer/Appointment1.png` };

let MessageIcon = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Message.png") : { uri: `asset:/images/icons/footer/Message.png` };
let MessageIconSelected = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Message1.png") : { uri: `asset:/images/icons/footer/Message1.png` };

let PaymentIcon = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Payment.png") : { uri: `asset:/images/icons/footer/Payment.png` };
let PaymentIconSelected = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Payment1.png") : { uri: `asset:/images/icons/footer/Payment1.png` };

let ReportIcon = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Report.png") : { uri: `asset:/images/icons/footer/Report.png` };
let ReportIconSelected = Platform.OS == "ios" ? require("../../assets/images/icons/footer/Report1.png") : { uri: `asset:/images/icons/footer/Report1.png` };


//converts screen input from % to decimal number for window height
const heightPercentageToDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(windowHeight * elemHeight / 100);
};


//main function
export function MainScreen() {

    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let routeNameColor;
                        let iconColor;
                        let shadowColor;
                        if (route.name === 'Home') {
                            iconName = focused ? iconName = HomeIconSelected : iconName = HomeIcon;
                            shadowColor = focused ? "#FFF7EC" : "white";
                            routeNameColor = focused ? "#ED8950" : "#707070";
                            iconColor = focused ? color = "#ed8950" : color = "#aeb0ff";
                        } else if (route.name === 'Appointment') {
                            iconName = focused ? iconName = AppointmentIconSelected : iconName = AppointmentIcon;
                            shadowColor = focused ? "#FFF7EC" : "white";
                            routeNameColor = focused ? "#ED8950" : "#707070";
                            iconColor = focused ? color = "#ed8950" : color = "#aeb0ff";
                        } else if (route.name === 'Report') {
                            iconName = focused ? iconName = ReportIconSelected : iconName = ReportIcon;
                            shadowColor = focused ? "#FFF7EC" : "white";
                            routeNameColor = focused ? "#ED8950" : "#707070";
                            iconColor = focused ? color = "#ed8950" : color = "#aeb0ff";
                        } else if (route.name === 'Payment') {
                            iconName = focused ? iconName = PaymentIconSelected : iconName = PaymentIcon;
                            shadowColor = focused ? "#FFF7EC" : "white";
                            routeNameColor = focused ? "#ED8950" : "#707070";
                            iconColor = focused ? color = "#ed8950" : color = "#aeb0ff";
                        }else if (route.name === 'walkinRegistration') {
                            iconName = focused ? iconName = PaymentIconSelected : iconName = PaymentIcon;
                            shadowColor = focused ? "#FFF7EC" : "white";
                            routeNameColor = focused ? "#ED8950" : "#707070";
                            iconColor = focused ? color = "#ed8950" : color = "#aeb0ff";
                        }

                        // You can return any component that you like here!
                        return (
                            <View style={{
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: heightPercentageToDP("6%"),
                                flex: 1
                            }}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 100,
                                        backgroundColor: shadowColor,
                                        width: Platform.OS === "ios" ? heightPercentageToDP("6%") : heightPercentageToDP("7.5%"),
                                        height: Platform.OS === "ios" ? heightPercentageToDP("6%") : heightPercentageToDP("7.5%"),
                                    }}>
                                    <Image source={iconName}
                                        resizeMode='contain'
                                        style={{
                                            width: windowWidth / 17,
                                            height: windowWidth / 17,
                                        }} />
                                </View>
                                <View>
                                    <Text style={{
                                        color: routeNameColor,
                                        fontSize: moderateScale(10),
                                        textAlign: 'center',
                                        textAlignVertical: 'bottom',
                                        width: windowWidth/5
                                    }}>{route.name}</Text>
                                </View>
                            </View>
                        );
                    },
                    tabBarActiveTintColor: '#ed8950',
                    tabBarInactiveTintColor: 'grey',
                    tabBarShowLabel: false,
                    tabBarLabelStyle: {
                        fontSize: 11,
                        textAlignVertical: 'center',
                        textAlign: 'center',
                        flex: 1
                    },
                    tabBarStyle: {
                        height: heightPercentageToDP("10%"),
                    }
                })}>

            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#f2f6fe',
                        height: windowHeight / 10,
                        elevation: 0
                    }
                }}
                component={HomeScreen} />
            <Tab.Screen
                name="Appointment"
                options={{
                    headerShown: false,
                }}
                component={AppointmentsScreen} />
            {/* <Tab.Screen
                name="Message"
                options={{
                    headerShown: false,
                }}
                component={PatientAllDoctorsMessages} /> */}

            <Tab.Screen
                name="Payment"
                options={{
                    headerShown: false,
                }}
                component={PaymentScreen} />
            <Tab.Screen
                name="Report"
                options={{
                    headerShown: false,
                }}
                component={PatientListForReport} />
                <Tab.Screen
                name="walkinRegistration"
                options={{
                    headerShown: false,
                }}
                component={walkinRegistration} />
        </Tab.Navigator>
    );
};

//styles
const styles = StyleSheet.create({
});

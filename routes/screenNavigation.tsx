import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import Country from '../screens/country';
import Weather from '../screens/weather';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#d1d1d1"
                        }
                    }}
                />
                <Stack.Screen
                    name="Country"
                    component={Country}
                    options={{
                        title: "Country",
                        headerStyle: {
                            backgroundColor: "#d1d1d1"
                        }
                    }}
                />
                <Stack.Screen
                    name="Weather"
                    component={Weather}
                    options={{
                        title: "Weather",
                        headerStyle: {
                            backgroundColor: "#d1d1d1"
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 1) setup Redux
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientScreen from './screens/ClientScreen';
import FormSendPackScreen from './screens/FormSendPackScreen';
import HistoryScreen from './screens/HistoryScreen';
import TrackingScreen from './screens/TrackingScreen';
import ConfirmReceptionScreen from './screens/ConfirmReceptionScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ClientScreen'
              component={ClientScreen}
              options={{
                headerShown: false,
              }}
            />
          <Stack.Screen
              name='FormSendPackScreen'
              component={FormSendPackScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='HistoryScreen'
              component={HistoryScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='TrackingScreen'
              component={TrackingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ConfirmReceptionScreen'
              component={ConfirmReceptionScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

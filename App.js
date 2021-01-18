import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import { commonScreens, authScreens, userScreens } from './src/routes/Routes';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/store/reducers';

// Remove Yellow Notifications
LogBox.ignoreAllLogs(''); 

const Stack = createStackNavigator();

export default function App() {
  const isLoggedIn = false;

  return (
    <Provider store={createStore(Reducers)}>
      <NavigationContainer>
        <Stack.Navigator>
          {Object.entries({
            // Use the screens normally
            ...commonScreens,
            // Use some screens conditionally based on some condition
            ...(isLoggedIn ? userScreens : authScreens),
          }).map(([name, component]) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
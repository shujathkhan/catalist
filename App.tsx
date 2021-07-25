import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Category from './src/layouts/Category';
import CategoryDetail from './src/layouts/CategoryDetail';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Category">
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen
            name="CategoryDetail"
            initialParams={{ itemId: 1 }}
            component={CategoryDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

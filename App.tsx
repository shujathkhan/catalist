import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoryDetail from './src/layouts/CategoryDetail';
import CardButton from './src/components/CardButton';
import { QueryClient, QueryClientProvider } from 'react-query';
import './src/server';
import { LogBox } from 'react-native';

type RootStackParamList = {
  CategoryDetail: { category: string };
};

const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  const client = new QueryClient();
  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CategoryDetail">
          <Stack.Screen
            name="CategoryDetail"
            component={CategoryDetail}
            initialParams={{ category: 'Personal Care' }}
            options={({ route }) => ({
              header: () => <CardButton type="banner" label={route?.params?.category} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

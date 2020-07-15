import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheets} from 'react-native';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import BoardScreen from './components/BoardScreen';
import BoardDetailScreen from './components/BoardDetailScreen';
import AddBoardScreen from './components/AddBoardScreen';
import EditBoardScreen from './components/EditBoardScreen';
import {Button } from 'react-native-elements';
import {decode, encode} from 'base-64';



// este código es por un bug que tiene la librería para conectarse a firestore
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

// este código es para eliminar una advertencia que aparece en la aplicación
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
}; 



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
    <Text>BIENVENIDO(A)</Text>
     <Image source={{ uri: "https://i.pinimg.com/originals/07/5f/65/075f65850e258ccf338c5d0348fd836d.jpg" }} style={{ width: 305, height: 159 }} />
      <Button
        title="Siguiente" 
        onPress={() => navigation.navigate('Board')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

 function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={HomeScreen} />
         <Stack.Screen name="Board" component={BoardScreen}
                      options={({ navigation }) => ({ 
                          title: 'Boards', 
                          headerRight: () => (
                            <Button
                              buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
                              icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
                              onPress={() => { navigation.push('AddBoard') }}
                            />
                          ),
                          })} />
        
        <Stack.Screen name="BoardDetails" component={BoardDetailScreen} 
          options={{ title: 'Board Details' }}/>
        <Stack.Screen name="AddBoard" component={AddBoardScreen} 
          options={{ title: 'Add Board' }}/>
        <Stack.Screen name="EditBoard" component={EditBoardScreen} 
          options={{ title: 'Edit Board' }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
    
}

export default App;


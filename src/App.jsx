import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Home from './Pages/Home/Home.jsx';



const MainStack = createStackNavigator()

export default function App() {
  return <NavigationContainer>
    <MainStack.Navigator initialRouteName='Login'>
      <MainStack.Screen name='Home' options={{ title: "Start screen" }} component={Home}/>
      <MainStack.Screen name='Login' component={Login}/>
      <MainStack.Screen name='Registration' component={Registration}/>
    </MainStack.Navigator> 
  </NavigationContainer>
}

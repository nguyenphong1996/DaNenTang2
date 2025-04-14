import { View, ScrollView } from "react-native";
import LoginScreen from '../src/screens/LoginSceen'
import RegisterSceen from '../src/screens/RegisterSceen'

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <LoginScreen />
    </ScrollView>
  );
}

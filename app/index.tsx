import { View, ScrollView } from "react-native";
import LoginScreen from '../src/screens/LoginScreen'


export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <LoginScreen />
    </ScrollView>
  );
}
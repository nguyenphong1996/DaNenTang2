import { View, ScrollView } from "react-native";
import WellComeSceen from '../src/screen/WellComeSceen'
import RegisterSceen from '../src/screen/RegisterSceen'

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <RegisterSceen />
    </ScrollView>
  );
}

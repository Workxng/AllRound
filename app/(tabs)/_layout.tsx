import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: "Home" }}/>
      <Tabs.Screen name="about" options={{ headerTitle: "About" }}/>
    </Tabs>
  );
}

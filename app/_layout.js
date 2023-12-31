import { Stack } from "expo-router";

export default function RootLayout () {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'CitiesIO' }} />
      <Stack.Screen name="[id]" options={{ headerShown: false, animation: 'slide_from_bottom' }} />
    </Stack>
  );
}
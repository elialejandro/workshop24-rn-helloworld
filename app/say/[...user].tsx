import { Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function User() {
  const { user, name } = useLocalSearchParams<{ user: string; name: string }>();

  return (
    <>
      <Stack.Screen options={{ title: 'User information' }} />
      <Text>Hello {user}</Text>
      <Text>Your name is {name}</Text>
    </>
  );
}

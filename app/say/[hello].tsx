import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function Hello() {
  const { hello } = useLocalSearchParams();

  return <Text>Hello {hello}</Text>;
}

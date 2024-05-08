import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>

        <Link href={{ pathname: '/hello' }} asChild>
          <Button title="Hello" />
        </Link>

        <Link href={{ pathname: '/say/mundo/1123', params: { name: 'Hello' } }} asChild>
          <Button title="Say" />
        </Link>
      </Container>
    </>
  );
}

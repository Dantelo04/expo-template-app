import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { authClient } from '@/lib/auth-client';
import { Link, router } from 'expo-router';
import { useEffect } from 'react';
import Loader from '@/components/Loader';

export default function TabOneScreen() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  if (isPending) return <Loader />;
  if (!session) return <Loader />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href="/sign-out">
        <Text style={styles.link}>Sign Out</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

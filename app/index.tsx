import React from 'react'
import { Redirect } from 'expo-router'
import { useSession } from '@/context/SessionProvider'
import { Index as IndexScreen } from '@/screens/Index'

const Index = () => {
  const { session } = useSession();

  if (session) return <Redirect href="/one" />;

  return (
    <IndexScreen />
  )
}

export default Index;
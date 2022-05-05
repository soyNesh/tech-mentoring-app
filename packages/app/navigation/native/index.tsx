import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { strings } from 'app/utils/strings'
import { Categories } from '../../models/Character.model'
import { useStore } from 'app/provider/store'
import { Header } from 'app/components/Header'
import { MenuButton } from 'app/components/MenuButton'
import { HomeScreen } from 'app/screens/home/home.screen'
import { UserDetailScreen } from 'app/screens/user/user.screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  const { currentView } = useStore()

  const { charactersTitle, episodesTitle, locationsTitle } = strings

  let title = charactersTitle

  if (currentView === Categories.episodes) {
    title = episodesTitle
  }

  if (currentView === Categories.locations) {
    title = locationsTitle
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Header />,
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          headerTitle: () => <Header />,
          headerRight: () => <MenuButton />,
          headerBackTitle: title,
        }}
      />
    </Stack.Navigator>
  )
}

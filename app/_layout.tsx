import { Link, Stack } from 'expo-router';
import {ConvexProvider, ConvexReactClient} from 'convex/react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; //for the "+" icon

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
}) 
export default function RootLayoutNav() {
  return(
    <ConvexProvider client={convex}>
      <Stack screenOptions={{
        headerStyle:{
          backgroundColor: '#353535', //Top bar colour
        },
        headerTintColor: '#d9d9d9'
      }}> <Stack.Screen
      name="index"
      options={{
        headerTitle: "My Chats", //Top text
        headerRight: () => ( 
          <Link href={'/(modal)/create'} asChild>
            <TouchableOpacity>
              <Ionicons name="add" size={32} color={"#d9d9d9"}/> 
            </TouchableOpacity>
          </Link>
        )
      }}
      />
      <Stack.Screen
      name="(model)/create"
      options={{
        headerTitle: "Start Chatting", //Top text
        presentation: 'modal', //card on top
        headerLeft: () => ( 
          <Link href={'/'} asChild>
            <TouchableOpacity>
              <Ionicons name="close-outline" size={32} color={"#d9d9d9"}/> 
            </TouchableOpacity>
          </Link>
        ),
      }}
      />
      <Stack.Screen name="(chat)/[chatid]" options={{headerTitle: 'Test'}} />
      </Stack>
    </ConvexProvider>
  )
}

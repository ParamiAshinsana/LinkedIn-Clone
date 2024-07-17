import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: "My Network",
          tabBarIcon: ({ color }) => <TabBarIcon name="people" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="newpost"
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => <TabBarIcon name="add-circle" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <TabBarIcon name="notifications" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color }) => <TabBarIcon name="briefcase" color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}

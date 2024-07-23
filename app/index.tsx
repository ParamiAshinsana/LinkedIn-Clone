import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Link, router } from 'expo-router';

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/LinkedIn-Logo.png')} style={styles.image} />
      <Text style={styles.title}>Join a trusted community of 1B professionals</Text>
      <Text style={styles.paragraph}>
        By clicking Agree & Join or Continue,you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy
      </Text>
      
      <TouchableOpacity style={styles.button1} onPress={() => router.push('/signup')}>
        <Text style={styles.buttonText1}>Agree & Join</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
      <Image source={require('../assets/images/google-48.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
      <Image source={require('../assets/images/facebook-48.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      
      <Text style={styles.signInText} onPress={() => router.push('/signin')}>Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 100,
    // borderWidth: 2,
    // borderColor: '#000',
    marginBottom: 20,
  },
  title: {
    width: 350,
    height: 100,
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 10,
    marginTop:20,
  },
  paragraph: {
    fontSize: 11,
    textAlign: 'center',
    marginTop:20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button1: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#050505',
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
  },
  buttonText: {
    color: '#050505',
    fontSize: 16,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 20,
  },
  signInText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 20,
  },
});

// import { useCallback, useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View
//       style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//       onLayout={onLayoutRootView}>
//       <Text>SplashScreen Demo! 👋</Text>
//       <Entypo name="rocket" size={30} />
//     </View>
//   );
// }


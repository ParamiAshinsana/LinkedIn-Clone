// import React from 'react';
// import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
// import {Link, router } from 'expo-router';

// export default function FirstPage() {
//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/images/LinkedIn-Logo.png')} style={styles.image} />
//       <Text style={styles.title}>Join a trusted community of 1B professionals</Text>
//       <Text style={styles.paragraph}>
//         By clicking Agree & Join or Continue,you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy
//       </Text>
      
//       <TouchableOpacity style={styles.button1} onPress={() => router.push('/signup')}>
//         <Text style={styles.buttonText1}>Agree & Join</Text>
//         {/* <Link href="/signup"></Link> */}
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Continue with Google</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Continue with Facebook</Text>
//       </TouchableOpacity>
      
//       <Text style={styles.signInText} onPress={() => router.push('/signin')}>Sign in</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 300,
//     height: 100,
//     // borderWidth: 2,
//     // borderColor: '#000',
//     marginBottom: 20,
//   },
//   title: {
//     width: 350,
//     height: 100,
//     fontSize: 20,
//     fontWeight: '300',
//     marginBottom: 10,
//     marginTop:20,
//   },
//   paragraph: {
//     fontSize: 11,
//     textAlign: 'center',
//     marginTop:20,
//     marginBottom: 20,
//     paddingHorizontal: 20,
//   },
//   button1: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginBottom: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#ffffff',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     borderWidth: 0.5,
//     borderColor: '#050505',
//     marginBottom: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText1: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   buttonText: {
//     color: '#050505',
//     fontSize: 16,
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#007bff',
//     marginTop: 20,
//   },
// });



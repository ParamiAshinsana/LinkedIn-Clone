import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Link, router } from 'expo-router';

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/LinkedIn-Logo.png')} style={styles.image} />
        {/* <Text style={styles.topic}>Create Your Acoount</Text> */}
      </View>

      <View style={styles.header}>
        <Text style={styles.topic}>Sign in</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.secondtopic}>or</Text>
        <Text style={styles.thirdtopic}>  Join LinkedIn</Text>
      </View>

      <View>
      <TouchableOpacity style={styles.button9}>
      <Image source={require('../assets/images/google-48.png')} style={styles.icon} />
        <Text style={styles.buttonText9}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button9}>
      <Image source={require('../assets/images/apple-logo-50.png')} style={styles.icon} />
        <Text style={styles.buttonText9}>Sign in with Apple</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button9}>
      <Image source={require('../assets/images/facebook-48.png')} style={styles.icon} />
        <Text style={styles.buttonText9}>Sign in with Facebook</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email or Phone Number</Text>
        <TextInput style={styles.input} placeholder="Email or Phone Number" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      </View>
      
      <TouchableOpacity style={styles.button}  onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 50,
    marginRight: 10,
    // borderWidth: 2,
    // borderColor: '#000',
  },
  topic: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  secondtopic: {
    fontSize: 12,
    fontWeight: '400',
    // marginTop:-1,
  },
  thirdtopic: {
    fontSize: 13,
    fontWeight: '500',
    // marginTop:-1,
    color: '#3d67d1',
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 20,
  },
  button9: {
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
  buttonText9: {
    color: '#050505',
    fontSize: 17.5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#b9babd',
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3d67d1',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

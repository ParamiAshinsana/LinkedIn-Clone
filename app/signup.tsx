import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Link, router } from 'expo-router';

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('../../assets/images/LinkedIn-Logo.pngg')} style={styles.image} /> */}
        {/* <Text style={styles.topic}>Create Your Acoount</Text> */}
      </View>

      <View style={styles.header}>
        <Text style={styles.topic}>Create Your Acoount</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} placeholder="First Name" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Last Name" />
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
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

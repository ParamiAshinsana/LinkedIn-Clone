import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const MyNetwork: React.FC = () => {
  const handleManageNetwork = () => {
    console.log('Manage network!');
    // router.push('/invitations');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {Array(5).fill(null).map((_, index) => (
          <View style={styles.manageNetworkBox} key={index}>
            <Text style={styles.manageNetworkText}>Manage my network</Text>
            <TouchableOpacity onPress={handleManageNetwork}>
              <FontAwesome name="angle-right" size={24} color="grey" style={styles.manageNetworkIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  manageNetworkBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 5,
  },
  manageNetworkText: {
    fontSize: 16,
    color: '#333',
  },
  manageNetworkIcon: {
    marginLeft: 10,
  },
});

export default MyNetwork;

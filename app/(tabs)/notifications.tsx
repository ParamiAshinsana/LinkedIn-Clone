import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../../components/Header';

const NotificationPage: React.FC = () => {
  const notifications = [
    {
      profileImage: require('../../assets/images/my-profile-image.jpg'),
      description: 'Sundar Pichai has endorsed your skills in "Machine Learning" and "Data Science". He mentioned that your recent project on predictive analytics was impressive.',
      time: '2h',
    },
    {
      profileImage: require('../../assets/images/my-profile-image.jpg'),
      description: 'Jane Smith commented on your photo.',
      time: '5h',
    },
    {
      profileImage: require('../../assets/images/my-profile-image.jpg'),
      description: 'Alice Johnson sent you a message.',
      time: '8h',
    },
    {
      profileImage: require('../../assets/images/my-profile-image.jpg'),
      description: 'Bob Brown started following you.',
      time: '1d',
    },
    {
      profileImage: require('../../assets/images/my-profile-image.jpg'),
      description: 'Charlie Green shared your post.',
      time: '3d',
    },
  ];

  return (

    <View style={styles.container}>

      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationContainer}>
            <Image source={notification.profileImage} style={styles.profileImage} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationDescription}>{notification.description}</Text>

            </View>
            <TouchableOpacity>
              <Text style={styles.notificationTime}>{notification.time}</Text>
              <FontAwesome name="ellipsis-v" size={20} color="grey" style={styles.ellipsisIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    padding: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  ellipsisIcon: {
    marginLeft: 4,
    marginTop:3,
  },
});

export default NotificationPage;

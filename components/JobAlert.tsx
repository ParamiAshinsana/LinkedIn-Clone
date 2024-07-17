// JobAlert.tsx
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface JobAlertProps {
  companyImage: any;
  companyName: string;
  jobDescription: string;
  description: string;
  onClose: () => void;
}

const JobAlert: React.FC<JobAlertProps> = ({ companyImage, companyName, description, jobDescription, onClose }) => {
  return (
    <View style={styles.jobContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesome name="close" size={17} color="grey" />
      </TouchableOpacity>
      <Image source={companyImage} style={styles.companyImage} />
      <View style={styles.textContainer}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.jobDescription}>{jobDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    // borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  companyImage: {
    width: 50,
    height: 50,
    // borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    color: '#383838',
  },
  jobDescription: {
    fontSize: 12,
    color: '#8a8a8a',
  },
});

export default JobAlert;

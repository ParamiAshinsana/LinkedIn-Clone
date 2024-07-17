// JobScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import JobAlert from '../../components/JobAlert';

export default function JobScreen() {
  const handleClose = () => {
    console.log('Job alert closed');
  };

  const jobAlerts = [
    { companyImage: require('../../assets/images/Company01.jpg'), companyName: 'Trainee System Engineer End User IT Surpport', description: 'IFS', jobDescription: 'Colombo, Western Province, Sri Lanka' },
    { companyImage: require('../../assets/images/Company02.jpg'), companyName: 'Lead/Senior QA Automation Engineer', description: 'Fcode Labs', jobDescription: 'Job description for company two' },
    { companyImage: require('../../assets/images/Company03.jpg'), companyName: 'Senior Develops Engineer', description: 'Epic Lanka',  jobDescription: 'Job description for company three' },
    { companyImage: require('../../assets/images/Company09.jpg'), companyName: 'Senior Software Engineer, (GO and Node)', description: 'RootCode Lab',  jobDescription: 'Job description for company four' },
    { companyImage: require('../../assets/images/Company05.jpg'), companyName: 'Staff Software Engineer/Technical Lead - Snowflake', description: 'Sysco Lab',  jobDescription: 'Job description for company five' },
    { companyImage: require('../../assets/images/Company06.jpg'), companyName: 'WordPress Developer/Level 1 Desktop Support Specialist', description: '99x',  jobDescription: 'Job description for company six' },
    { companyImage: require('../../assets/images/Company07.jpg'), companyName: 'Blockchain Developer', description: 'Virtusa',  jobDescription: 'Job description for company seven' },
    { companyImage: require('../../assets/images/8.jpg'), companyName: 'Full Stack Developer (React.js + Node.js)', description: 'WSO2',  jobDescription: 'Job description for company eight' },
    { companyImage: require('../../assets/images/hcltech.jpg'), companyName: 'Linux Consultant', description: 'HCL Tech',  jobDescription: 'Job description for company nine' },
    { companyImage: require('../../assets/images/Company10.jpg'), companyName: 'Backend Staff Engineer, (Spring boot-Java)', description: 'PaperTrl',  jobDescription: 'Job description for company ten' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.dotsIcon}>
          <FontAwesome name="ellipsis-v" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageIcon}>
          <FontAwesome name="comment" size={24} color="grey" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <Text style={styles.title}>Job Alerts</Text> */}
        {jobAlerts.map((alert, index) => (
          <JobAlert
            key={index}
            companyImage={alert.companyImage}
            companyName={alert.companyName}
            description={alert.description}
            jobDescription={alert.jobDescription}
            onClose={handleClose}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dotsIcon: {
    marginLeft: 15,
    marginRight:8,
  },
  messageIcon: {
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});


























// import { StyleSheet, Text, View } from 'react-native';

// export default function JobScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Job Screen</Text>
//       <Text>Coming soon!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });
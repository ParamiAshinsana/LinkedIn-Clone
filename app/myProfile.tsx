import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MyProfile: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Background Image and Profile Section */}
      <View style={styles.backgroundContainer}>
        <Image source={require('../assets/images/my-profile-bi.png')} style={styles.backgroundImage} />
        <TouchableOpacity style={styles.editBackgroundIcon}>
          <FontAwesome name="pencil" size={20} color="black" />
        </TouchableOpacity>
        <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.addIcon}>
          <FontAwesome name="plus-circle" size={23} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfileIcon}>
          <FontAwesome name="pencil" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Profile Information */}
      <Text style={styles.name}>Parami Ashinsana</Text>
      <Text style={styles.info1}>Student at Institute of Software Engineering (IJSE)</Text>
      <Text style={styles.info2}>IJSE-Institute of Software Engineering ▪️ IJSE-Institute of Software Engineering </Text>
      <Text style={styles.info3}>Kaluthara District, Western Province, Sri Lanka</Text>
      <Text style={styles.info4}>3000+ connections</Text>

      {/* Button Bar */}
      <View style={styles.buttonBar}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Open to</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Add section</Text>
        </TouchableOpacity>
        <FontAwesome name="ellipsis-v" size={20} color="grey" style={styles.ellipsisIcon} />
      </View>

      {/* Analytics Section */}
      <View style={styles.analyticsContainer}>
        <Text style={styles.analyticsTitle}>Analytics</Text>
        
        <View style={styles.analyticsSummary}>
          <FontAwesome name="eye" size={20} color="grey" />
          <Text style={styles.analyticsSummaryText}>Profile views</Text>
        </View>
        <View style={styles.analyticsDetailsSection}>
          <View style={styles.analyticsDetailItem}>
            <FontAwesome name="globe" size={20} color="grey" />
            <View style={styles.analyticsDetailTextContainer}>
              <Text style={styles.analyticsDetailTitle}>Post views</Text>
              <Text style={styles.analyticsDetailSubtitle}>Number of views on your posts</Text>
            </View>
          </View>
          <View style={styles.analyticsDetailItem}>
            <FontAwesome name="users" size={20} color="grey" />
            <View style={styles.analyticsDetailTextContainer}>
              <Text style={styles.analyticsDetailTitle}>Search appearances</Text>
              <Text style={styles.analyticsDetailSubtitle}>Number of times you appeared in search results</Text>
            </View>
          </View>
          <View style={styles.analyticsDetailItem}>
            <FontAwesome name="briefcase" size={20} color="grey" />
            <View style={styles.analyticsDetailTextContainer}>
              <Text style={styles.analyticsDetailTitle}>Job inquiries</Text>
              <Text style={styles.analyticsDetailSubtitle}>Number of job inquiries received</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.showAllAnalytics}>
            <Text style={styles.showAllText}>Show all analytics</Text>
            <Entypo name="chevron-right" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>


      {/* Resources Section */}
      <View style={styles.analyticsContainer}>
        <Text style={styles.analyticsTitle}>Resources</Text>
        
        <View style={styles.analyticsSummary}>
          <FontAwesome name="eye" size={20} color="grey" />
          <Text style={styles.analyticsSummaryText}>Profile views</Text>
        </View>
        <View style={styles.analyticsDetailsSection}>
          <View style={styles.analyticsDetailItem}>
            <FontAwesome name="globe" size={20} color="grey" />
            <View style={styles.analyticsDetailTextContainer}>
              <Text style={styles.analyticsDetailTitle}>Post views</Text>
              <Text style={styles.analyticsDetailSubtitle}>Number of views on your posts</Text>
            </View>
          </View>
          <View style={styles.analyticsDetailItem}>
            <FontAwesome name="users" size={20} color="grey" />
            <View style={styles.analyticsDetailTextContainer}>
              <Text style={styles.analyticsDetailTitle}>Search appearances</Text>
              <Text style={styles.analyticsDetailSubtitle}>Number of times you appeared in search results</Text>
            </View>
          </View>
          <View style={styles.analyticsDetailItem}>
            <FontAwesome name="briefcase" size={20} color="grey" />
            <View style={styles.analyticsDetailTextContainer}>
              <Text style={styles.analyticsDetailTitle}>Job inquiries</Text>
              <Text style={styles.analyticsDetailSubtitle}>Number of job inquiries received</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.showAllAnalytics}>
            <Text style={styles.showAllText}>Show all analytics</Text>
            <Entypo name="chevron-right" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    marginTop: 13,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  backgroundContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  editBackgroundIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    bottom: -40,
    left: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  addIcon: {
    position: 'absolute',
    bottom: -35,
    left: 90,
  },
  editProfileIcon: {
    position: 'absolute',
    bottom: -40,
    right: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'left',
  },
  info1: {
    textAlign: 'left',
    color: '#262626',
    marginBottom: 5,
    fontSize: 15,
  },
  info2: {
    fontSize: 13,
    textAlign: 'left',
    color: '#404040',
    marginBottom: 5,
  },
  info3: {
    fontSize: 12,
    textAlign: 'left',
    color: '#666',
    marginBottom: 5,
  },
  info4: {
    textAlign: 'left',
    color: '#3d67d1',
    marginBottom: 5,
  },
  buttonBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button1: {
    backgroundColor: '#3d67d1',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
  },
  button2: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 0.4,
    borderColor: '#3d67d1',
  },
  buttonText2: {
    color: '#3d67d1',
    fontSize: 16,
  },
  ellipsisIcon: {
    marginLeft: 10,
  },
  analyticsContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  analyticsSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  analyticsSummaryText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  analyticsDetailsSection: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10,
    paddingTop: 10,
  },
  analyticsDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  analyticsDetailTextContainer: {
    marginLeft: 10,
  },
  analyticsDetailTitle: {
    fontSize: 16,
    color: '#666',
  },
  analyticsDetailSubtitle: {
    fontSize: 14,
    color: '#999',
  },
  showAllAnalytics: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  showAllText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default MyProfile;






























// import React from 'react';
// import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
// import { FontAwesome, Entypo } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// const MyProfile: React.FC = () => {
//   const router = useRouter();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topBar}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <FontAwesome name="arrow-left" size={24} color="black" />
//         </TouchableOpacity>
//         <TextInput style={styles.searchBar} placeholder="Search" />
//         <TouchableOpacity>
//           <FontAwesome name="cog" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Background Image and Profile Section */}
//       <View style={styles.backgroundContainer}>
//         <Image source={require('../assets/images/my-profile-bi.png')} style={styles.backgroundImage} />
//         <TouchableOpacity style={styles.editBackgroundIcon}>
//           <FontAwesome name="pencil" size={20} color="black" />
//         </TouchableOpacity>
//         <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
//         <TouchableOpacity style={styles.addIcon}>
//           <FontAwesome name="plus-circle" size={23} color="#007bff" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.editProfileIcon}>
//           <FontAwesome name="pencil" size={20} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Information */}
//       <Text style={styles.name}>Parami Ashinsana</Text>
//       <Text style={styles.info1}>Student at Institutte of Software Engineering(IJSE)</Text>
//       <Text style={styles.info2}>IJSE-Institute of Software Engineering ▪️ IJSE-Institute of Software Engineering </Text>
//       <Text style={styles.info3}>Kaluthara District,Western Province,Sri Lanka</Text>
//       <Text style={styles.info4}>3000+ connections</Text>

//       {/* Button Bar */}
//       <View style={styles.buttonBar}>
//         <TouchableOpacity style={styles.button1}>
//           <Text style={styles.buttonText1}>Open to</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button2}>
//           <Text style={styles.buttonText2}>Add section</Text>
//         </TouchableOpacity>
//         <FontAwesome name="ellipsis-v" size={20} color="grey" style={styles.ellipsisIcon} />
//       </View>

//       {/* Analytics Section */}
//       <View style={styles.analyticsContainer}>
//         <Text style={styles.analyticsTitle}>Analytics</Text>
//         <View style={styles.analyticsItem}>
//           <FontAwesome name="eye" size={20} color="grey" />
//           <Text style={styles.analyticsText}>Profile views</Text>
//         </View>
//         <View style={styles.analyticsItem}>
//           <FontAwesome name="globe" size={20} color="grey" />
//           <Text style={styles.analyticsText}>Post views</Text>
//         </View>
//         <View style={styles.analyticsItem}>
//           <FontAwesome name="users" size={20} color="grey" />
//           <Text style={styles.analyticsText}>Search appearances</Text>
//         </View>
//         <TouchableOpacity style={styles.showAllAnalytics}>
//           <Text style={styles.showAllText}>Show all analytics</Text>
//           <Entypo name="chevron-right" size={20} color="grey" />
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     marginTop:10,
//   },
//   topBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   searchBar: {
//     flex: 1,
//     marginHorizontal: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     paddingHorizontal: 10,
//   },
//   backgroundContainer: {
//     position: 'relative',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backgroundImage: {
//     width: '160%',
//     height: 150,
//     borderRadius: 10,
//   },
//   editBackgroundIcon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     position: 'absolute',
//     bottom: -40,
//     left: 10,
//     borderWidth: 3,
//     borderColor: '#fff',
//   },
//   addIcon: {
//     position: 'absolute',
//     bottom: -35,
//     left: 90,
//   },
//   editProfileIcon: {
//     position: 'absolute',
//     bottom: -40,
//     right: 10,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 40,
//     textAlign: 'left',
//   },
// //   info: {
// //     textAlign: 'left',
// //     color: '#666',
// //     marginBottom: 5,
// //   },
// info1: {
//     textAlign: 'left',
//     color: '#262626',
//     marginBottom: 5,
//     fontSize: 15,
//   },
//   info2: {
//     fontSize: 13,
//     textAlign: 'left',
//     color: '#404040',
//     marginBottom: 5,
//   },
//   info3: {
//     fontSize: 12,
//     textAlign: 'left',
//     color: '#666',
//     marginBottom: 5,
//   },
//   info4: {
//     textAlign: 'left',
//     color: '#3d67d1',
//     marginBottom: 5,
//   },
//   buttonBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
// //   button: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// button1: {
//     backgroundColor: '#3d67d1',
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     borderRadius: 20,
//   },
//   buttonText1: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   button2: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     borderRadius: 20,
//     borderWidth: 0.4, 
//     borderColor: '#3d67d1',
//   },
//   buttonText2: {
//     color: '#3d67d1',
//     fontSize: 16,
//   },
//   ellipsisIcon: {
//     marginLeft: 10,
//   },
//   analyticsContainer: {
//     backgroundColor: '#f9f9f9',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   analyticsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   analyticsItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   analyticsText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#666',
//   },
//   showAllAnalytics: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   showAllText: {
//     fontSize: 16,
//     color: '#007bff',
//     marginRight: 5,
//   },
// });

// export default MyProfile;

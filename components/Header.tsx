// import React, { useState } from 'react';
// import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'; // Ensure Text is imported from react-native
// import { FontAwesome } from '@expo/vector-icons';
// import Sidebar from '../components/Sidebar';

// const Header = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <View style={styles.headerContainer}>
//       <TouchableOpacity onPress={toggleSidebar}>
//         <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
//       </TouchableOpacity>
//       <TextInput style={styles.searchBar} placeholder="Search" />
//       <TouchableOpacity style={styles.messageIcon}>
//         <FontAwesome name="comment" size={22.5} color="grey" />
//       </TouchableOpacity>
//       <Sidebar isVisible={sidebarVisible} onClose={toggleSidebar} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginTop: 30,
//   },
//   profileImage: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 10,
//   },
//   searchBar: {
//     flex: 1,
//     height: 35,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     paddingHorizontal: 10,
//   },
//   messageIcon: {
//     marginLeft: 10,
//   },
// });

// export default Header;




import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Sidebar from '../components/Sidebar';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={toggleSidebar}>
        <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
      </TouchableOpacity>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <TouchableOpacity style={styles.messageIcon}>
        <FontAwesome name="comment" size={22.5} color="grey" />
      </TouchableOpacity>
      <Sidebar isVisible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 22.5,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  messageIcon: {
    marginLeft: 10,
  },
});

export default Header;

































// // Header.tsx
// import React from 'react';
// import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const Header = () => {
//   return (
//     <View style={styles.headerContainer}>
//       <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
//       <TextInput style={styles.searchBar} placeholder="Search" />
//       <TouchableOpacity style={styles.messageIcon}>
//         <FontAwesome name="comment" size={22.5} color="grey" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginTop: 30,
//   },
//   profileImage: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 10,
//   },
//   searchBar: {
//     flex: 1,
//     height: 35,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     paddingHorizontal: 10,
//   },
//   messageIcon: {
//     marginLeft: 10,
//   },
// });

// export default Header;

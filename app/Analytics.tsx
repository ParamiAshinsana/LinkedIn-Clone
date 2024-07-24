// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// export default function Analytics() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.cardLeft}>
//           <FontAwesome name="arrow-left" size={24} color="black" style={styles.backIcon} />
//           <View style={styles.textContainer}>
//             <Text style={styles.cardText}>150 profile views</Text>
//             <Text style={styles.cardText}>Last 30 days</Text>
//           </View>
//         </View>
//         <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
//       </View>
//       <View style={styles.quadCard}>
//         <View style={styles.quadRow}>
//           <View style={styles.quadBox}>
//             <Text style={styles.quadText}>Text 1</Text>
//           </View>
//           <View style={styles.quadBox}>
//             <Text style={styles.quadText}>Text 2</Text>
//           </View>
//         </View>
//         <View style={styles.quadRow}>
//           <View style={styles.quadBox}>
//             <Text style={styles.quadText}>Text 3</Text>
//           </View>
//           <View style={styles.quadBox}>
//             <Text style={styles.quadText}>Text 4</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//     marginBottom: 20,
//     alignSelf: 'flex-start', // This will align the card to the top-left side
//   },
//   cardLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   backIcon: {
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   cardText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   quadCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   quadRow: {
//     flexDirection: 'row',
//   },
//   quadBox: {
//     flex: 1,
//     padding: 20,
//     borderColor: '#ddd',
//     borderWidth: 0.5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quadText: {
//     fontSize: 16,
//   },
// });


import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Analytics() {
  return (
    <View style={styles.container}>
        {/* Original */}
      {/* <FontAwesome name="arrow-left" size={24} color="grey" style={styles.backIcon} /> */}
      <View style={styles.card}>
        
        <View style={styles.textContainer}>
        <FontAwesome name="arrow-left" size={24} color="grey" style={styles.backIcon} />
          <Text style={styles.cardText1}>Analytics & tools</Text>
          <Text style={styles.cardText2}>Last 30 days</Text>
        </View>
        <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.quadCard}>
        <View style={styles.quadRow}>
          <View style={styles.quadBox}>
            <Text style={styles.quadText}>Text 1</Text>
          </View>
          <View style={styles.quadBox}>
            <Text style={styles.quadText}>Text 2</Text>
          </View>
        </View>
        <View style={styles.quadRow}>
          <View style={styles.quadBox}>
            <Text style={styles.quadText}>Text 3</Text>
          </View>
          <View style={styles.quadBox}>
            <Text style={styles.quadText}>Text 4</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#f0f0f0',
    paddingTop:40,
  },
  backIcon: {
    marginBottom: 40, // Add some space below the icon
    marginLeft:10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
//   cardText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
  cardText1: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cardText2: {
    fontSize: 14,
    marginBottom: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginTop:60,
  },
  quadCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  quadRow: {
    flexDirection: 'row',
  },
  quadBox: {
    flex: 1,
    padding: 20,
    borderColor: '#ddd',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadText: {
    fontSize: 16,
  },
});


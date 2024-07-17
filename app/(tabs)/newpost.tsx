// // NewPostScreen.tsx
// import React from 'react';
// import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import Header from '../../components/Header';

// const NewPostScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Header
//         profileImage={require('../../assets/images/my-profile-image.jpg')}
//         smallText="xxxx"
//         onPendingPress={() => console.log('Pending pressed')}
//         onPostPress={() => console.log('Post pressed')}
//       />
//       <TextInput
//         style={styles.textArea}
//         placeholder="What do you want to talk about?"
//         multiline
//         numberOfLines={4}
//       />
//       <View style={styles.bottomRightSidebar}>
//         <TouchableOpacity style={styles.iconButton}>
//           <FontAwesome name="camera" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <FontAwesome name="photo" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   textArea: {
//     flex: 1,
//     marginTop: 10,
//     padding: 10,
//     fontSize: 18,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     textAlignVertical: 'top',
//   },
//   bottomRightSidebar: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     flexDirection: 'row',
//   },
//   iconButton: {
//     marginLeft: 10,
//   },
// });

// export default NewPostScreen;




// NewPostScreen.tsx
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../../components/NewPost';

const NewPostScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header
        profileImage={require('../../assets/images/my-profile-image.jpg')}
        smallText="Anyone"
        onPendingPress={() => console.log('Pending pressed')}
        onPostPress={() => console.log('Post pressed')}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Share your thoughts..."
        multiline
        numberOfLines={4}
      />
      <View style={styles.bottomRightSidebar}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="camera" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="photo" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    padding: 10,
    backgroundColor: '#fff',
  },
  textArea: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  bottomRightSidebar: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default NewPostScreen;





















// import { StyleSheet, Text, View } from 'react-native';

// export default function NewPostScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Post Screen</Text>
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
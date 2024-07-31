// import React from 'react';
// import { View, ScrollView, StyleSheet ,TouchableOpacity} from 'react-native';
// import Header from '../../components/Header';
// import InvitationCard from '../../components/InvitationCard';
// import { FontAwesome } from '@expo/vector-icons';

// const Network: React.FC = () => {
//   const invitations = [
//     {
//       profileImage: require('../../assets/images/Profile-Picture1.jpg'),
//       profileName: 'John Doe',
//       position: 'Software Engineer at Company X',
//       mutualConnections: '3 mutual connections',
//       timeAgo: 'Yesterday',
//     },
//     {
//       profileImage: require('../../assets/images/Profile-Picture1.jpg'),
//       profileName: 'Jane Smith',
//       position: 'Marketing Manager at Company Y',
//       mutualConnections: '5 mutual connections',
//       timeAgo: '2 days ago',
//     },
//     // Add more invitations as needed...
//   ];

//   const handleClose = () => {
//     console.log('Invitation closed!');
//   };

//   const handleAccept = () => {
//     console.log('Invitation accepted!');
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {invitations.map((invitation, index) => (
//           <InvitationCard
//             key={index}
//             profileImage={invitation.profileImage}
//             profileName={invitation.profileName}
//             position={invitation.position}
//             mutualConnections={invitation.mutualConnections}
//             timeAgo={invitation.timeAgo}
//             onClose={handleClose}
//             onAccept={handleAccept}
//           />
//         ))}
//       </ScrollView>
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     paddingTop: 1,
//   },
//   scrollView: {
//     flexGrow: 1,
//     paddingVertical: 10,
//   },
// });

// export default Network;





import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import InvitationCard from '../../components/InvitationCard';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const Network: React.FC = () => {
  const invitations = [
    {
      profileImage: require('../../assets/images/Profile-Picture1.jpg'),
      profileName: 'John Doe',
      position: 'Software Engineer at Company X',
      mutualConnections: '3 mutual connections',
      timeAgo: 'Yesterday',
    },
    {
      profileImage: require('../../assets/images/Profile-Picture1.jpg'),
      profileName: 'Jane Smith',
      position: 'Marketing Manager at Company Y',
      mutualConnections: '5 mutual connections',
      timeAgo: '2 days ago',
    },
    // Add more invitations as needed...
  ];

  const handleClose = () => {
    console.log('Invitation closed!');
  };

  const handleAccept = () => {
    console.log('Invitation accepted!');
  };
  const handleManageNetwork = () => {
    console.log('Manage network!');
    router.push('/myNetwork');
  };

  const handleManageInvitation = () => {
    console.log('Manage network!');
    router.push('/invitations');
    
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.manageInvitationBox}>
          <Text style={styles.manageInvitationText}>Invitations (119)</Text>
          <TouchableOpacity onPress={handleManageInvitation}>
            <FontAwesome name="angle-right" size={24} color="grey" style={styles.manageNetworkIcon} />
          </TouchableOpacity>
        </View>
        {invitations.map((invitation, index) => (
          <InvitationCard
            key={index}
            profileImage={invitation.profileImage}
            profileName={invitation.profileName}
            position={invitation.position}
            mutualConnections={invitation.mutualConnections}
            timeAgo={invitation.timeAgo}
            onClose={handleClose}
            onAccept={handleAccept}
          />
        ))}
        <View style={styles.manageNetworkBox}>
          <Text style={styles.manageNetworkText}>Manage my network</Text>
          <TouchableOpacity onPress={handleManageNetwork}>
            <FontAwesome name="angle-right" size={24} color="grey" style={styles.manageNetworkIcon} />
          </TouchableOpacity>
        </View>
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
    // margin: 10,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop:5,
  },
  manageNetworkText: {
    fontSize: 16,
    color: '#333',
  },
  manageInvitationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    // margin: 10,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop:5,
  },
  manageInvitationText: {
    fontSize: 16,
    color: '#333',
  },
  manageNetworkIcon: {
    marginLeft: 10,
  },
});

export default Network;



























// import { StyleSheet, Text, View } from 'react-native';

// export default function NetworkScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Network Screen</Text>
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
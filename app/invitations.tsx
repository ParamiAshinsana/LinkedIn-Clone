// import React from 'react';
// import { View, ScrollView, StyleSheet ,TouchableOpacity} from 'react-native';
// import Header from '../components/Header';
// import InvitationCard from '../components/InvitationCard';
// import { FontAwesome } from '@expo/vector-icons';

// const Network: React.FC = () => {
//   const invitations = [
//     {
//       profileImage: require('../assets/images/Profile-Picture1.jpg'),
//       profileName: 'John Doe',
//       position: 'Software Engineer at Company X',
//       mutualConnections: '3 mutual connections',
//       timeAgo: 'Yesterday',
//     },
//     {
//       profileImage: require('../assets/images/Profile-Picture1.jpg'),
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
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface InvitationCardProps {
  profileImage: any;
  profileName: string;
  position: string;
  mutualConnections: string;
  timeAgo: string;
  onClose: () => void;
  onAccept: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
  profileImage,
  profileName,
  position,
  mutualConnections,
  timeAgo,
  onClose,
  onAccept,
}) => {
  return (
    <View style={styles.card}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.details}>
        <Text style={styles.profileName}>{profileName}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.mutualConnections}>{mutualConnections}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onClose} style={styles.actionButton}>
          <FontAwesome name="times" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAccept} style={styles.actionButton}>
          <FontAwesome name="check" size={20} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    color: '#555',
  },
  mutualConnections: {
    fontSize: 12,
    color: '#999',
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
  },
});

export default InvitationCard;

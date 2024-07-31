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
            <FontAwesome name="arrow-left" size={24} color="grey" style={styles.backIcon} />
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.cardText1}>
                        Analytics & tools
                    </Text>
                    <Text style={styles.cardText2}>Last 30 days</Text>
                </View>
                <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
            </View>

            <View style={styles.secondCard}>
                <View style={styles.secondCardHeader}>
                    <Text style={styles.cardText3}>Analytics & tools</Text>
                    <FontAwesome name="question-circle" size={24} color="grey" style={styles.questionIcon} />
                </View>
                <View style={styles.quadCard}>
                    <View style={styles.quadRow}>
                        <View style={styles.quadBox}>
                            <Text style={styles.quadText1}>1464</Text>
                            <Text style={styles.quadText2}>Post impressions</Text>
                            <Text style={styles.quadText3}>🔻58.9% past 7 days</Text>
                        </View>
                        <View style={styles.quadBox}>
                            <Text style={styles.quadText1}>3678</Text>
                            <Text style={styles.quadText2}>Followers</Text>
                            <Text style={styles.quadText3}>🔺51.6% past 7 days</Text>
                        </View>
                    </View>
                    <View style={styles.quadRow}>
                        <View style={styles.quadBox}>
                            <Text style={styles.quadText1}>297</Text>
                            <Text style={styles.quadText2}>Profile viewers</Text>
                            <Text style={styles.quadText3}>Past 90 days</Text>
                        </View>
                        <View style={styles.quadBox}>
                            <Text style={styles.quadText1}>364</Text>
                            <Text style={styles.quadText2}>Search appearances</Text>
                            <Text style={styles.quadText3}>Previous week</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.thirdCard}>
                <View style={styles.secondCardHeader}>
                    <Text style={styles.thirdTopic}>Creation tools</Text>
                </View>

                <View style={styles.firstLine}>
                    <Text style={styles.paragraphText}>Get more ways to start conversations with your community. Learn more about creation tool access.</Text>
                </View>

                <View style={styles.secondLine}>
                    <View style={styles.secondRow}>
                        <Text style={styles.paragraphText}>LinkedIn Live</Text>
                        <FontAwesome name="info-circle" size={20} color="grey" style={styles.icon} />
                        <Text style={styles.paragraphText1}>Learn more</Text>
                        <FontAwesome name="angle-right" size={24} color="grey" style={styles.icon} />
                    </View>

                    <View style={styles.secondRow}>
                        <Text style={styles.paragraphText}>Audio Event</Text>
                        <FontAwesome name="info-circle" size={20} color="grey" style={styles.icon} />
                        <Text style={styles.paragraphText1}>Learn more</Text>
                        <FontAwesome name="angle-right" size={24} color="grey" style={styles.icon} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 40,
    },
    backIcon: {
        marginBottom: 10,
        marginLeft: 20,
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
        marginHorizontal: 20,
    },
    textContainer: {
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'flex-start',
    },
    cardText1: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        marginRight: 10,
    },
    questionIcon: {
        marginRight: 170,
        marginBottom:20,
    },
    cardText2: {
        fontSize: 14,
        marginBottom: 5,
    },
    cardText3: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    secondCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginHorizontal: 20,
        padding: 20,
    },
    thirdCard: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        padding: 20,
        marginHorizontal: 20,
    },
    secondCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    quadCard: {
        // Style definitions for the quadCard
    },
    quadRow: {
        flexDirection: 'row',
    },
    quadBox: {
        flex: 1,
        padding: 17,
        borderColor: '#ddd',
        borderWidth: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
    },
    quadText1: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    quadText2: {
        fontSize: 14,
    },
    quadText3: {
        fontSize: 12,
        color: '#999999',
    },
    thirdTopic: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    paragraphText: {
        fontSize: 14,
        flex: 1,
    },
    paragraphText1: {
        fontSize: 14,
        marginLeft: 10,
    },
    firstLine: {
        marginBottom: 10,
    },
    secondLine: {
        marginTop: 10,
    },
    secondRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginLeft: 10,
    },
});







// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// export default function Analytics() {
//     return (
//         <View style={styles.container}>
//             {/* Original */}
//             {/* <FontAwesome name="arrow-left" size={24} color="grey" style={styles.backIcon} /> */}
//             <View style={styles.card}>

//                 <View style={styles.textContainer}>
//                     <FontAwesome name="arrow-left" size={24} color="grey" style={styles.backIcon} />
//                     <Text style={styles.cardText1}>Analytics & tools</Text>
//                     <Text style={styles.cardText2}>Last 30 days</Text>
//                 </View>
//                 <Image source={require('../assets/images/my-profile-image.jpg')} style={styles.profileImage} />
//             </View>




//             {/* <View style={styles.secondCard}>
//             <Text style={styles.cardText3}>Analytics & tools</Text>
//             <FontAwesome name="questionmark" size={24} color="grey"/>
//                 <View style={styles.quadCard}>
//                     <View style={styles.quadRow}>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText}>Text 1</Text>
//                         </View>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText}>Text 2</Text>
//                         </View>
//                     </View>
//                     <View style={styles.quadRow}>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText}>Text 3</Text>
//                         </View>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText}>Text 4</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View> */}


//             <View style={styles.secondCard}>
//                 <View style={styles.secondCardHeader}>
//                     <Text style={styles.cardText3}>Analytics & tools</Text>
//                     <FontAwesome name="question-circle" size={24} color="grey" style={styles.questionIcon} />
//                 </View>
//                 <View style={styles.quadCard}>
//                     <View style={styles.quadRow}>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText1}>1464</Text>
//                             <Text style={styles.quadText2}>Post impressions</Text>
//                             <Text style={styles.quadText3}>🔻58.9% past 7 days</Text>
//                         </View>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText1}>3678</Text>
//                             <Text style={styles.quadText2}>Followers</Text>
//                             <Text style={styles.quadText3}>🔺51.6% past 7 days</Text>
//                         </View>
//                     </View>
//                     <View style={styles.quadRow}>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText1}>297</Text>
//                             <Text style={styles.quadText2}>Profile viewers</Text>
//                             <Text style={styles.quadText3}>Past 90 days</Text>
//                         </View>
//                         <View style={styles.quadBox}>
//                             <Text style={styles.quadText1}>364</Text>
//                             <Text style={styles.quadText2}>Search appearances</Text>
//                             <Text style={styles.quadText3}>Previous week</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>



//             <View style={styles.thirdCard}>
//                 <View style={styles.secondCardHeader}>
//                     <Text style={styles.thirdTopic}>Creation tools</Text>
//                 </View>

//                 <View style={styles.firstLine}>
//                     <Text style={styles.paragraphText}>Get more ways to start conversaions with your community.Learn more
//                         about creation tool access.
//                     </Text>
//                 </View>

//                 <View style={styles.secondLine}>

//                     <View style={styles.secondRow}>
//                         <Text style={styles.paragraphText}>LinkedIn Live</Text>
//                         <View>
//                         <FontAwesome name="times-circle-o" size={24} color="grey"/>
//                         <Text style={styles.paragraphText1}>Learn more</Text>
//                         </View>
//                     </View>


//                     <View >
//                         <Text style={styles.paragraphText}>Audio Event</Text>
//                     </View>


//                 </View>

//             </View>





//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // padding: 20,
//         backgroundColor: '#f0f0f0',
//         paddingTop: 40,
//     },
//     backIcon: {
//         marginBottom: 40, // Add some space below the icon
//         marginLeft: 10,
//     },
//     questionIcon: {
//         marginRight: 200,
//         marginBottom: 20,
//     },
//     card: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 10,
//         elevation: 5,
//         marginBottom: 20,
//     },
//     textContainer: {
//         flex: 1,
//     },
//     //   cardText: {
//     //     fontSize: 16,
//     //     marginBottom: 5,
//     //   },
//     cardText1: {
//         fontSize: 20,
//         marginBottom: 5,
//         fontWeight: 'bold',
//     },
//     cardText2: {
//         fontSize: 14,
//         marginBottom: 5,
//     },
//     cardText3: {
//         fontSize: 20,
//         marginBottom: 20,
//         fontWeight: 'bold',
//     },
//     profileImage: {
//         width: 60,
//         height: 60,
//         borderRadius: 25,
//         marginTop: 60,
//     },
//     quadCard: {
//         // backgroundColor: '#fff',
//         // borderRadius: 10,
//         // shadowColor: '#000',
//         // shadowOpacity: 0.1,
//         // shadowRadius: 10,
//         // elevation: 5,
//     },
//     // secondCard: {
//     //     padding: 30,
//     //     borderColor: '#ddd',
//     //     borderWidth: 0.5,
//     //     backgroundColor: '#ffffff',
//     // },
//     secondCard: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 10,
//         elevation: 5,
//         // marginHorizontal: 20, // Center the card with equal margin on both sides
//         padding: 20,
//     },
//     thirdCard: {
//         marginTop: 10,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 10,
//         elevation: 5,
//         // marginHorizontal: 20, // Center the card with equal margin on both sides
//         padding: 20,
//     },
//     secondCardHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     quadRow: {
//         flexDirection: 'row',
//     },
//     quadBox: {
//         flex: 1,
//         padding: 20,
//         borderColor: '#ddd',
//         borderWidth: 0.7,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//         borderRadius: 5,
//     },
//     // quadText: {
//     //     fontSize: 16,
//     // },
//     quadText1: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     quadText2: {
//         fontSize: 14,
//     },
//     quadText3: {
//         fontSize: 12,
//         color: '#999999',
//     },
//     thirdTopic: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     paragraphText: {
//         fontSize: 14,
//     },
//     paragraphText1: {
//         fontSize: 14,
        
//     },
//     firstLine: {
//         alignItems: 'center',
//     },
//     secondLine: {
//         alignItems: 'center',
//     },
//     secondRow:{
//       flexDirection:'row',
//     },
    
// });


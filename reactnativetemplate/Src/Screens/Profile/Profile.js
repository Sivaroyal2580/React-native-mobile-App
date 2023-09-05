import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {styles} from './profilestyles';
const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Jane Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>jane.doe@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>San Francisco, CA</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </Text>
      </View>
    </View>
  );
};
export default Profile;

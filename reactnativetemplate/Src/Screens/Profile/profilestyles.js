import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    infoContainer: {
      marginTop: 20,
    },
    infoLabel: {
      fontWeight: 'bold',
    },
    infoValue: {
      marginTop: 5,
    },
  });
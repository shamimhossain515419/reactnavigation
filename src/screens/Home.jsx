import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return ( 
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>👋 Welcome Back!</Text>
      <Text style={styles.title}>Your Dashboard</Text>

      <View style={styles.actionBox}>
        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.actionText}>👤 Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.actionText}>🔍 Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>⚙️ Settings</Text>
        </TouchableOpacity>
       
      </View>
      
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F6F7FB",
  },

  welcome: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  actionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  actionBtn: {
    backgroundColor: "#fff",
    padding: 15,
    width: "32%",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },

  actionText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
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

       
        
      </View>
      <Text style={{marginTop:'15', fontSize:18, fontWeight:400, color:"red"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium qui dignissimos. Placeat, laborum quae reprehenderit magni incidunt ullam deserunt dolores eveniet nisi, ut temporibus quaerat, hic eius. Praesentium animi tempora aliquam placeat odit officiis voluptatibus fugiat, assumenda labore exercitationem aliquid ab repellat aspernatur impedit nam. Voluptatem praesentium esse porro fugiat nam voluptatum laudantium, possimus quam suscipit. Quis error, asperiores numquam molestiae adipisci fugiat rerum eum, laboriosam maxime consectetur, necessitatibus officia itaque atque? Officiis mollitia placeat quasi quod est, laborum nihil ratione amet error dolor nam accusantium, reprehenderit quis ut, nemo dolorum! Voluptate dolore dicta facilis ipsum cum, dolor odio?</Text>
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
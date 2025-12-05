import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Profile({navigation, route}) {
  const { name="Shamim Hossain" , id="1212" , email="shamimhossain@gmail.com" } = route?.params || {};
  console.log(route.params,'routerouteroute')

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{name.charAt(0)}</Text>
          </View>
        </View>
        
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>ID: #{id}</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📧 Email</Text>
          <Text style={styles.infoValue}>{email}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>🆔 User ID</Text>
          <Text style={styles.infoValue}>{id}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>👤 Full Name</Text>
          <Text style={styles.infoValue}>{name}</Text>
        </View>
      </View>

      <View style={styles.actionBox}>
        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.actionIcon}>🔍</Text>
          <Text style={styles.actionText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => {/* Edit Profile */}}
        >
          <Text style={styles.actionIcon}>✏️</Text>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => {/* Settings */}}
        >
          <Text style={styles.actionIcon}>⚙️</Text>
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  header: {
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  avatarContainer: {
    marginBottom: 15,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4A90E2",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4A90E2",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  avatarText: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 5,
  },

  id: {
    fontSize: 14,
    color: "#7F8C8D",
    fontWeight: "500",
  },

  infoCard: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  infoRow: {
    paddingVertical: 12,
  },

  infoLabel: {
    fontSize: 14,
    color: "#7F8C8D",
    fontWeight: "600",
    marginBottom: 6,
  },

  infoValue: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#ECF0F1",
    marginVertical: 5,
  },

  actionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  actionBtn: {
    backgroundColor: "#fff",
    padding: 15,
    width: "31%",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },

  actionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },

  actionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2C3E50",
  },

  logoutBtn: {
    backgroundColor: "#E74C3C",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#E74C3C",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
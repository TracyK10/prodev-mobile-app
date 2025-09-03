import { View, Text, ScrollView, StyleSheet } from "react-native";
import PropertyListing from "@/components/PropertyListing";
import { SAMPLE_DATA } from "@/constants/data";

const Saved = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listingContainer}>
        <Text style={styles.title}>Your Saved Properties</Text>
        <PropertyListing listings={SAMPLE_DATA} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listingContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Saved;
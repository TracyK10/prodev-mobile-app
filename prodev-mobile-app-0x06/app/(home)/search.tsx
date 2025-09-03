import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import PropertyListing from "@/components/PropertyListing";
import { SAMPLE_DATA } from "@/constants/data";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search properties..."
          placeholderTextColor="#999"
        />
      </View>
      <ScrollView style={styles.resultsContainer}>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: '#333',
  },
  resultsContainer: {
    flex: 1,
  },
});

export default Search;
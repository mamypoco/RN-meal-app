import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
   return (
      <View style={styles.subtitleContainer}>
         <Text style={styles.subtitle}>{children}</Text>
      </View>
   );
}

export default Subtitle;

const styles = StyleSheet.create({
   subtitle: {
      color: "#e0c9bd",
      fontSize: 18,
      fontWeight: "bold",

      textAlign: "center",
   },
   subtitleContainer: {
      padding: 6,
      marginHorizontal: 12,
      marginVertical: 4,
      borderBottomColor: "#e0c9bd",
      borderBottomWidth: 2,
   },
});

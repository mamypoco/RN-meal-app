import { View, Text, StyleSheet } from "react-native";

function MealDetails({
   duration,
   complexity,
   affordability,
   style,
   textStyle,
}) {
   //accepting extra style property, and merge that incoming style with default styles
   return (
      <View style={[styles.details, style]}>
         {/*  put the default styles into an array, and add the incoming styles as extra element. This will overwrite the style set here */}
         <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
         <Text style={[styles.detailItem, textStyle]}>
            {complexity.toUpperCase()}
         </Text>
         <Text style={[styles.detailItem, textStyle]}>
            {affordability.toUpperCase()}
         </Text>
      </View>
   );
}

export default MealDetails;

const styles = StyleSheet.create({
   details: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      justifyContent: "center",
   },
   detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
   },
});

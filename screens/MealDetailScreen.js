import { Text, View, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../assets/data/dummy-data";

function MealDetailScreen({ route, navigation }) {
   const mealId = route.params.mealId; //we have mealId from MealItem

   const selectedMeal = MEALS.find((meal) => meal.id === mealId);
   return (
      <View>
         <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
         <Text style={styles.title}>{selectedMeal.title}</Text>
         <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
         />

         <Text>Ingredients</Text>

         {selectedMeal.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
         ))}

         <Text>Steps</Text>

         {selectedMeal.steps.map((step) => (
            <Text key={step}>{step}</Text>
         ))}
      </View>
   );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
   image: {
      width: "100%",
      height: 350,
   },
   title: {
      fontWeight: "bold",
      fontSize: 24,
      margin: 8,
      textAlign: "center",
      color: "white",
   },
   detailText: {
      color: "white",
   },
});

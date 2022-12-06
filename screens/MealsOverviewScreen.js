import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
   //screen component automatically get route and navigation props.
   const catId = route.params.categoryId;

   const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(
         (category) => category.id === catId
      ).title;

      navigation.setOptions({
         title: categoryTitle,
      });
   }, [catId, navigation]);

   function renderMealItem(itemData) {
      const item = itemData.item;
      const mealItemProps = {
         id: item.id, //this is to pass the id to MealItem.js
         title: item.title,
         imageUrl: item.imageUrl,
         affordability: item.affordability,
         complexity: item.complexity,
         duration: item.duration,
      };
      return <MealItem {...mealItemProps} />;
   }

   return (
      <View style={styles.container}>
         <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
         />
      </View>
   );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
});

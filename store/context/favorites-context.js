import { useState, createContext } from "react";

export const FavoritesContext = createContext({
   ids: [],
   addFavorite: (id) => {},
   removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
   const [favoriteMealIds, setFavoriteMealIds] = useState([]);

   function addFavorite(id) {
      setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
   }

   function removeFavorite(id) {
      setFavoriteMealIds((currentFavIds) =>
         currentFavIds.filter((mealId) => mealId !== id)
      );
      // mealId points the one in MealDetailScreen. If the mealId is not equal to id, I want to keep it, if it's the same one, the item will be filtered out.
   }

   const value = {
      ids: favoriteMealIds,
      addFavorite: addFavorite, //latter refers to function addFavorite
      removeFavorite: removeFavorite, //latter refers to function removeFavorite
   };

   return (
      <FavoritesContext.Provider value={value}>
         {children}
      </FavoritesContext.Provider>
   );
}

export default FavoriteContextProvider;

import initialState from "./initialState";

//selectors
export const getAllCategories = (state) => state.categories;


const categoriesReducer = (statePart = initialState.categories, action) => {
      return statePart;
  
};

export default categoriesReducer;

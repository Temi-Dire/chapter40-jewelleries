export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //We need to get the index of the item that was clicked
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //We need a new basket
      const newBasket = [...state.basket];
      //We need to remove the item that was clicked by using its index
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the item with id ${action.id} as it is not in the basket`
        );
      }
      //And now we finally display the new basket
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

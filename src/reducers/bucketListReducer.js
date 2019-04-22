const bucketListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      if (state.find(item => item.name === action.country.name)) return state;
      return [...state, action.country];
    case 'TOGGLE_VISITED_STATUS':
      return state.map((item) => {
        if (action.countryName === item.name) {
          return { ...item, visited: !item.visited };
        }
        return item;
      });
    default:
      return state;
  }
};

export default bucketListReducer;

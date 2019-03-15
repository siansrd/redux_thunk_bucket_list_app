const bucketListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_COUNTRY':
      return [...state, action.country]
    default:
      return state;
  }
}

export default bucketListReducer;
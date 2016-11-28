const firstUse = (state = true, action) => {
  switch (action.type) {
    case 'UPDATE_FIRST_USE':
      return action.use
    default:
      return state
  }
};

export default firstUse;
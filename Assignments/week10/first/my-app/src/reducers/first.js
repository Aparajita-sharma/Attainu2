const reducer = (currentScore=0, actions) => {
  switch (actions.type){
    case 'UPDATE_BONUS':
      return currentScore + actions.payload;
        case 'LEVEL_COMPLETED':
        return currentScore + actions.payload;
          case 'LIFE_LOST':
          return currentScore - actions.payload;
        default :
        return currentScore;
  }     
  }
export default reducer;


const reducer = (currentScore=0, actions) => {
  switch (actions.type){
    case 'UPDATE_BONUS':
      return currentScore + 100;

      case 'LEVEL_COMPLETED':
        return currentScore + 500;
        
        case 'LIFE_LOST':
          return currentScore - 250;
        
          
  }
}

export default reducer;


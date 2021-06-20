import {WITHDROW_500, WITHDROW_1000, DONATE_ALL} from '../actions/variable';

const initialState = {
users : "appy",
Amount : 5000,
}

const reducer =( state =initialState, actions) =>{
  switch (actions.type){
    case WITHDROW_500 : return {
      ...state, users: state.Amount- 500
    }
    case WITHDROW_1000 : return {
      ...state, users: state.Amount- 1000
    }
    case DONATE_ALL : return {
      ...state, users: state.users.Amount- 1000
    }
    default :
    return state;
  }
}

export default reducer;
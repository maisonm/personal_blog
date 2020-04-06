import NAVBAR_ACTIONS from '../actions/navbar_actions';
import _ from 'lodash';

const defaultState = {
  link: 'Home',
};

const navbarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NAVBAR_ACTIONS.Types.NAV_LINK_ACTIVE: {
      let link = action.payload;
      let newState = _.cloneDeep(state);
      newState.link = link;
      return newState;
    }
    default:
      return state;
  }
};

export default navbarReducer;

import shopData from './shop.data';

const INITIAL_STATE = {
  collections: shopData
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default shopReducer;
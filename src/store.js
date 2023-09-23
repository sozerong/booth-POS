// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';



const checkedMenusSlice = createSlice({
  name: 'checkedMenus',
  initialState: [],
  reducers: {
    addMenus(state, action) {
      return [...state, action.payload];
    },
    removeMenus(state, action) {
      return state.filter(checkedmenu => checkedmenu.id !== action.payload);
    },
    resetMenus() {
      return [];
    },
  },
});

const orderAmountSlice = createSlice({
  name: 'orderAmount',
  initialState: 0,
  reducers: {
    plusAmount(state) {
      return state + 1;
    },
    minusAmount(state) {
      return state - 1;
    },
    resetAmount() {
      return 0;
    },
  },
});

const orderPriceSlice = createSlice({
  name: 'orderPrice',
  initialState: 0,
  reducers: {
    plusPrice(state, action) {
      return state + action.payload;
    },
    minusPrice(state, action) {
      return state - action.payload;
    },
    resetPrice() {
      return 0;
    },
  },
});

export const {
  addMenus,
  removeMenus,
  resetMenus,
} = checkedMenusSlice.actions;
export const {
  plusPrice,
  minusPrice,
  resetPrice,
} = orderPriceSlice.actions;
export const {
  plusAmount,
  minusAmount,
  resetAmount,
} = orderAmountSlice.actions;

export const selectCheckedMenus = createSelector(
    (state) => state.checkedMenus,
    (checkedMenus) => checkedMenus
  ); 
    
  
  
export default configureStore({
  reducer: {
    checkedMenus: checkedMenusSlice.reducer,
    orderAmount: orderAmountSlice.reducer,
    orderPrice: orderPriceSlice.reducer,
  },
});


export const updateMenuAmount = createAction('updateMenuAmount');


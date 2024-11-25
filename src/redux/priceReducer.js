import { createSlice } from "@reduxjs/toolkit";
import { mixes } from "../components/Cards/mixCards";
import { feed } from "../components/Cards/feed";

const initialState = {
  mixes,
  feed
};

const slice = createSlice({
  name: "price",
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      state.mixes = state.mixes.map(card => {
        if(card.id === action.payload.cardId){
          return{
            ...card,
            price: 5 * action.payload.weight
          }
        }
        return card
      })
    },
    updatePrice2: (state, action) => {
      state.feed = state.feed.map(card => {
        if(card.id === action.payload.cardId){
          return{
            ...card,
            price: 5 * action.payload.weight
          }
        }
        return card
      })
    }
  },
});

export const { updatePrice, updatePrice2 } = slice.actions;
export const priceReducer = slice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transfers: [],
  },

  reducers: {
    handleSetTransfers: (state, { payload }) => {
      state.transfers = payload;
      return state;
    },
    handleCreateNewTransfer: (state, { payload }) => {
      state.transfers.unshift(payload);
      return state;
    },
  },
});

export const { handleSetTransfers, handleCreateNewTransfer } = transactionSlice.actions;

export const transactionSelector = (state) => state.transaction;

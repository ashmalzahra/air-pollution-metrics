import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=0b2a0309c6e564c4b179292f7eda7c80';

const initialState = {
  stocks: [],
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchStocks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        stocks: action.payload,
      }))
      .addCase(fetchStocks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export { fetchStocks }
export default stocksSlice.reducer;